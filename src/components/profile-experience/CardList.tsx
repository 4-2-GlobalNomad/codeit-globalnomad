'use client';

import { getMyActivities } from '@/apis/my-activities';
import MeatballIcon from '@/assets/icons/meatball.svg';
import StarIcon from '@/assets/icons/star-fill.svg';
import testImage from '@/assets/images/test-image-experience1.png';
import { MyActivitiesList } from '@/types/my-activities-list';
import { toNumberFormatOfKor } from '@/utils/to-number-format-of-kor.ts';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import * as styles from './CardList.css';

export default function CardList() {
  const [activities, setActivities] = useState<MyActivitiesList[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('accessToken');
        if (token) {
          try {
            const data = await getMyActivities();
            setActivities(data);
            console.log('Fetched activities:', data);
          } catch (error) {
            console.error('Failed to fetch activities:', error);
          }
        } else {
          console.log('No access token found');
        }
      }
    };

    fetchActivities();
  }, []);
  return (
    <section className={styles.cardSectionList}>
      {activities.map((activity) => (
        <div className={styles.cardSection} key={activity.id}>
          <div className={styles.cardImageContainer}>
            <Image
              src={activity.bannerImageUrl || testImage}
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
                {/* TODO: rating 공용 컴포넌트 적용하기 */}
                <StarIcon width={19} height={19} />
                <span> {activity.rating.toFixed(1)}</span>
                <span>({activity.reviewCount})</span>
              </div>
              <h3 className={styles.h3Title}>{activity.title}</h3>
            </div>
            <div className={styles.cardBottomLayout}>
              <p className={styles.priceText}>{toNumberFormatOfKor(activity.price)}</p>
              {/* TODO: dropdown 공용 컴포넌트 적용하기 */}
              <button>
                <MeatballIcon width={40} height={40} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
