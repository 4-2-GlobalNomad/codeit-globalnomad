'use client';

import MyActivityCalendar from '@/components/profile/reservations/status/MyActivityCalendar';
import * as styles from './page.css';

export default function StatusPage() {
  return (
    <div className={styles.content}>
      <h1>예약 현황</h1>
      <p>체험명: 함께 배우면 즐거운 스트릿댄스 </p>
      <MyActivityCalendar />
    </div>
  );
}
