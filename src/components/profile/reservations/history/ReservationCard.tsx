import exampleBanner from '@/assets/images/test-image-experience1.png';
import Image from 'next/image';
import * as styles from './ReservationCard.css';

// interface StatusObj {
//   msg: string;
//   color: string;
//   cancelAvailable: boolean;
//   reviewAvailable: boolean;
// }

export interface ReservationData {
  activity: { id: number; title: string; bannerImageUrl: string };
  scheduleId: number;
  id: number;
  teamId: string;
  userId: number;
  status: string;
  reviewSubmitted: boolean;
  totalPrice: number;
  headCount: number;
  date: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
}

export const status = {
  pending: { msg: '예약 신청', color: '#2EB4FF', cancelAvailable: true, reviewAvailable: false },
  confirm: { msg: '예약 승인', color: '#FF7C1D', cancelAvailable: false, reviewAvailable: false },
  decline: { msg: '예약 거절', color: '#ff472e', cancelAvailable: false, reviewAvailable: false },
  canceled: { msg: '예약 취소', color: '#79747E', cancelAvailable: false, reviewAvailable: false },
  completed: { msg: '체험 완료', color: '#79747E', cancelAvailable: false, reviewAvailable: true },
};

export default function ReservationCard(props: { data: ReservationData }) {
  return (
    <div className={styles.card}>
      <Image className={styles.img} src={exampleBanner} loading='lazy' alt={'액티비티 대표 이미지'} />
      <div className={styles.texts}>
        <p className={styles.status}>{status.pending.msg}</p>
        <p className={styles.title}>{props.data.activity.title}</p>
        <p className={styles.subtitle}>
          {props.data.date} . {props.data.startTime}-{props.data.endTime} . {props.data.headCount}명
        </p>
        <p className={styles.price}>￦{props.data.totalPrice / props.data.headCount}</p>
      </div>
    </div>
  );
}
