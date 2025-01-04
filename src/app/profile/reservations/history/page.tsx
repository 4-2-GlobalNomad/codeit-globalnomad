'use client';

import DropDownB from '@/components/dropdown/DropDownB';
import EmptyCard from '@/components/profile/reservations/history/EmptyCard';
import ReservationCard, { ReservationData } from '@/components/profile/reservations/history/ReservationCard';
import { DATA } from './mock_data';
import * as styles from './page.css';

export default function ReservationPage() {
  const res: ReservationData[] = DATA.reservations;
  const options = ['예약 신청', '예약 취소', '예약 승인', '예약 거절', '체험 완료'];
  const isExist = res.length === 0 ? false : true;

  const onSelect = (i: string) => {
    console.log(i);
  };

  return (
    <div className={styles.background}>
      <div className={styles.page}>
        <div className={styles.panel}>예약 내역 페이지</div>
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <h2 className={styles.history}>예약 내역</h2>
            {isExist && <DropDownB options={options} placeholder='필터' onSelect={onSelect} />}
          </div>
          <div className={styles.list}>
            {isExist || <EmptyCard />}
            {isExist && res.map((data, i) => <ReservationCard data={data} key={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
