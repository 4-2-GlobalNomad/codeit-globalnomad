'use client';

import StarIcon from '@/assets/icons/star-fill.svg';
import DropDownA from '@/components/dropdown/DropDownA';
import { useMyActivities } from '@/hooks/use-my-activities';
import { MyActivitiesList } from '@/types/my-activities-list';
import { formatToKor } from '@/utils/format-to-kor';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import * as styles from './CardList.css';

export default function CardList() {
  const { data, fetchNextPage, isFetchingNextPage } = useMyActivities();
  const targetRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
      {data?.pages.map((page) => (
        <div key={page.cursorId} className={styles.cardSectionList}>
          {page.activities.map((activity: MyActivitiesList) => (
            <div className={styles.cardSection} key={activity.id}>
              <div className={styles.cardImageContainer}>
                <Image
                  src={activity.bannerImageUrl}
                  fill
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
                    {/* <MeatballIcon width={40} height={40} /> */}
                    <DropDownA
                      onSelect={(option) => {
                        if (option === '수정하기') {
                          router.push(`/profile/my-activities/edit/${activity.id}`);
                        } else if (option === '삭제하기') {
                          return alert('삭제 하시겠습니까?');
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
      {isFetchingNextPage && (
        <div
          style={{
            background: 'black',
            color: 'white',
            height: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>Loading..</h1>
        </div>
      )}
      <div ref={targetRef} />
    </section>
  );
}
