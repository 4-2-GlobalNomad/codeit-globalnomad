import Skeleton from '../Skeleton';
import * as styles from './ReservationItemSkeleton.css';

const ReservationItemSkeleton = () => {
  return (
    <Skeleton className={styles.skeleton}>
      <div className={styles.text}>
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
    </Skeleton>
  );
};

export default ReservationItemSkeleton;
