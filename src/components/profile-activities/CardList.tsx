'use client';

import MeatballIcon from '@/assets/icons/meatball.svg';
import StarIcon from '@/assets/icons/star-fill.svg';
import { useMyActivities } from '@/hooks/use-my-activities';
import { MyActivitiesList } from '@/types/my-activities-list';
import { toNumberFormatOfKor } from '@/utils/to-number-format-of-kor.ts';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import * as styles from './CardList.css';

export default function CardList() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, isFetchingNextPage } = useMyActivities();

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });
    if (targetRef && targetRef.current) {
      intersectionObserver.observe(targetRef.current); // targetRef.current가 보일 때까지 IntersectionObserver를 통해 감시
    }

    return () => {
      if (targetRef.current) {
        intersectionObserver.unobserve(targetRef.current); // targetRef.current가 사라지면 IntersectionObserver를 해제
      }
    };
  }, [targetRef, fetchNextPage]);
  return (
    <section>
      {data?.pages.map((page) => (
        <div key={page.cursorId} className={styles.cardSectionList}>
          {page.activities.map((activity: MyActivitiesList) => (
            <div className={styles.cardSection} key={activity.id}>
              <div className={styles.cardImageContainer}>
                <Image
                  src={activity.bannerImageUrl}
                  width={520}
                  height={272}
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
                  <p className={styles.priceText}>{toNumberFormatOfKor(activity.price)}</p>
                  <button>
                    <MeatballIcon width={40} height={40} />
                  </button>
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
