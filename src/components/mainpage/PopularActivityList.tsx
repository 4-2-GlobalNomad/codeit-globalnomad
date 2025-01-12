'use client';

import getPopularActivity from '@/apis/get-popular-activity';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import PopularCardSkeleton from '../skeletonui/mainpage/PopularCardSkeleton';
import PopularActivityButton from './PopularActivityButton';
import PopularActivityCard from './PopularActivityCard';
import * as styles from './PopularActivityList.css';

const OFFSET = 3;

const PopularActivityList = () => {
  const [startIdx, setStartIdx] = useState(0);

  const { data, isFetching, isError, error } = useQuery({
    queryKey: ['popularActivity', 1, 10],
    queryFn: getPopularActivity,
    staleTime: 5 * 60 * 1000,
  });

  if (isError) {
    return <div>{error?.message || '데이터를 가져오는 중 오류가 발생했습니다.'}</div>;
  }

  const activities = data?.activities || [];
  const totalCount = data?.totalCount || 0;

  const pageActivityList = activities.slice(startIdx, startIdx + OFFSET);

  const handleLeftClick = () => {
    if (startIdx > 0) {
      setStartIdx(startIdx - OFFSET);
    }
  };

  const handleRightClick = () => {
    if (startIdx + OFFSET < activities.length) {
      setStartIdx(startIdx + OFFSET);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>🔥인기 체험</h2>
        <PopularActivityButton
          idx={startIdx / OFFSET + 1}
          onLeftClick={handleLeftClick}
          onRightClick={handleRightClick}
        />
      </div>
      <div className={styles.cardContainer}>
        {isFetching ? (
          <div className={styles.skeletonContainer}>
            {Array.from({ length: OFFSET }, (_, index) => (
              <PopularCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          pageActivityList.map((activity) => <PopularActivityCard key={activity.id} cardData={activity} />)
        )}
      </div>
      {totalCount === 0 && !isFetching && <div className={styles.emptyContainer}>인기 체험 내역이 없습니다.</div>}
    </div>
  );
};

export default PopularActivityList;
