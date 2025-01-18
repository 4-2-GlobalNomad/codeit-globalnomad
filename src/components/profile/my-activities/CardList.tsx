'use client';

import StarIcon from '@/assets/icons/star-fill.svg';
import DropDownA from '@/components/dropdown/DropDownA';
import { useDeleteActivity } from '@/hooks/use-delete-activity';
import { useMyActivities } from '@/hooks/use-my-activities';
import { MyActivitiesList } from '@/types/my-activities-list';
import { formatToKor } from '@/utils/format-to-kor';
import { CircularProgress, Skeleton } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import * as styles from './CardList.css';

export default function CardList() {
  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useMyActivities();
  const targetRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [, setIsDropdownOpen] = useState(false);
  const mutation = useDeleteActivity();
  const queryClient = useQueryClient();

  const handleDelete = (id: number) => {
    mutation.mutate(id, {
      onSuccess: () => {
        alert('삭제되었습니다.');
        queryClient.invalidateQueries({ queryKey: ['my-activities'] });
      },
      onError: (error: Error) => {
        const axiosError = error as AxiosError;
        const errorMessage = (axiosError.response?.data as { message: string })?.message ?? '삭제에 실패했습니다.';
        console.error('Error deleting activity:', error);
        alert(errorMessage);
      },
    });
  };

  const handleClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });

    const currentTarget = targetRef.current;

    if (currentTarget) {
      intersectionObserver.observe(currentTarget); // targetRef.current가 보일 때까지 IntersectionObserver를 통해 감시
    }

    return () => {
      if (currentTarget) {
        intersectionObserver.unobserve(currentTarget); // targetRef.current가 사라지면 IntersectionObserver를 해제
      }
    };
  }, [fetchNextPage]);
  return (
    <section>
      {isLoading && (
        <div className={styles.cardSectionList}>
          {new Array(3).fill('').map((_, index) => (
            <div className={styles.cardSection} key={`skeleton-${index}`}>
              <div className={styles.cardImageContainer}>
                <Skeleton variant='rectangular' width='100%' height={200} animation='wave' />
              </div>
              <div className={styles.cardContentLayout}>
                <div className={styles.cardTopLayout}>
                  <Skeleton variant='text' width='60%' height={30} animation='wave' />
                  <Skeleton variant='text' width='40%' height={20} animation='wave' />
                </div>
                <div className={styles.cardBottomLayout}>
                  <Skeleton variant='text' width='50%' height={20} animation='wave' />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 데이터 렌더링 */}
      {!isLoading &&
        data?.pages.map((page) => (
          <div key={page.cursorId} className={styles.cardSectionList}>
            {page.activities.map((activity: MyActivitiesList) => (
              <div className={styles.cardSection} key={activity.id}>
                <div className={styles.cardImageContainer}>
                  <Image
                    src={activity.bannerImageUrl}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    loading='lazy'
                    alt={'체험 이미지'}
                    className={styles.responsiveImage}
                  />
                </div>
                <div className={styles.cardContentLayout}>
                  <div className={styles.cardTopLayout}>
                    <div className={styles.starRatingLayout}>
                      <StarIcon width={19} height={19} />
                      <span> {activity.rating.toFixed(1)}</span>
                      <span>({activity.reviewCount})</span>
                    </div>
                    <h3 className={styles.h3Title}>{activity.title}</h3>
                  </div>
                  <div className={styles.cardBottomLayout}>
                    <p className={styles.priceText}>{formatToKor(activity.price)}</p>
                    <div onClick={handleClick}>
                      <DropDownA
                        onSelect={(option) => {
                          if (option === '수정하기') {
                            router.push(`/profile/my-activities/edit/${activity.id}`);
                          } else if (option === '삭제하기') {
                            if (confirm('삭제 하시겠습니까?')) {
                              handleDelete(activity.id);
                            }
                          }
                        }}
                        options={['수정하기', '삭제하기']}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}

      {/* 추가 데이터 로딩 중일 때 로딩바 */}
      {isFetchingNextPage && (
        <div className={styles.loadingBarWrapper}>
          <CircularProgress color='inherit' />
        </div>
      )}

      {/* Intersection Observer의 target */}
      <div ref={targetRef} />
    </section>
  );
}
