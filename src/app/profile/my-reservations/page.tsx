'use client';

import DropDownB from '@/components/dropdown/DropDownB';
import EmptyCard from '@/components/profile/my-reservations/EmptyCard';
import ReservationCard, { ReservationData } from '@/components/profile/my-reservations/ReservationCard';
import { useMyReservations } from '@/hooks/use-my-reservations';
import { Suspense, useEffect, useRef, useState } from 'react';
import Loading from './loading';
import * as styles from './page.css';

export default function ReservationPage() {
  const [filter, setFilter] = useState<string | null>(null);
  const [isExist, setIsExist] = useState<boolean>(true);
  const { data, fetchNextPage } = useMyReservations(filter);
  const targetRef = useRef<HTMLDivElement>(null);

  const options = ['예약 신청', '예약 취소', '예약 승인', '예약 거절', '체험 완료'];

  // console.log('pages: ', data);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage(); // 최초 패치 & 옵저버가 관찰되면 추가 패치
      }
    });

    const currentTarget = targetRef.current;
    if (currentTarget) {
      intersectionObserver.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        intersectionObserver.unobserve(currentTarget);
      }
    };
  }, [fetchNextPage, filter]);

  useEffect(() => {
    if (data?.pages[0].totalCount === 0) {
      setIsExist(false);
    } else {
      setIsExist(true);
    }
  }, [data?.pages, filter]);

  // 드롭다운 필터
  const handleSelect = (i: string) => {
    setFilter(i);
  };

  const handleUnselect = () => {
    if (filter !== null) {
      setFilter(null);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <h2 className={styles.history}>예약 내역</h2>
          {(filter !== null || isExist) && (
            <div onClick={handleUnselect}>
              <DropDownB options={options} placeholder='필터' onSelect={handleSelect} />
            </div>
          )}
        </div>
        <div className={styles.list}>
          {isExist || data === undefined || <EmptyCard />}
          {isExist &&
            data !== undefined &&
            data.pages.map((group, i) => (
              <div className={styles.list} key={i * 100}>
                {group.reservations.map((res: ReservationData, j: number) => (
                  <ReservationCard data={res} key={j} />
                ))}
              </div>
            ))}

          {<div className={styles.ref} ref={targetRef} />}
        </div>
      </div>
    </Suspense>
  );
}
