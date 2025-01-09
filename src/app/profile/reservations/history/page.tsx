'use client';

import DropDownB from '@/components/dropdown/DropDownB';
import EmptyCard from '@/components/profile/reservations/history/EmptyCard';
import ReservationCard, { ReservationData } from '@/components/profile/reservations/history/ReservationCard';
import { useMyReservations } from '@/hooks/use-my-reservations';
import { useEffect, useRef, useState } from 'react';
import * as styles from './page.css';

export default function ReservationPage() {
  const [filter, setFilter] = useState<string | null>(null);
  const { data, fetchNextPage } = useMyReservations(filter);
  const targetRef = useRef<HTMLDivElement>(null);

  const options = ['예약 신청', '예약 취소', '예약 승인', '예약 거절', '체험 완료'];
  const isExist = data?.pages[0].totalCount === 0 ? false : true;

  console.log('pages: ', data);

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

  // 드롭다운 필터
  // 필터 해제: 필터 적용된 인풋창 다시 한번 클릭하면 해제
  const onSelect = (i: string) => {
    if (filter == null) {
      setFilter(i);
    } else {
      setFilter(null); // 드롭다운 클릭 x 항목까지 선택해야 동작함... div 한겹 더싸서 onclick으로?
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.contentHeader}>
        <h2 className={styles.history}>예약 내역</h2>
        {isExist && <DropDownB options={options} placeholder='필터' onSelect={onSelect} />}
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
  );
}
