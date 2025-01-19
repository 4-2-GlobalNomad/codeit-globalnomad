import ReservationCardSkeleton from '@/components/skeletonui/my-reservations/ReservationCardSkeleton';
import * as styles from './loading.css';

export default function Loading() {
  return (
    <div className={styles.content}>
      <div className={styles.contentHeader}>
        <h2 className={styles.history}>예약 내역</h2>
        <div className={styles.dropdown}></div>
      </div>
      <div className={styles.list}>
        {new Array(10).fill('').map((value, i) => (
          <ReservationCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
