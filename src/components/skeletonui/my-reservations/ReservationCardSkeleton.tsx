import Skeleton from '../Skeleton';
import * as styles from './ReservationCardSkeleton.css';

const ReservationCardSkeleton = () => {
  console.log('스켈레톤 렌더링');

  return (
    <Skeleton className={styles.skeleton}>
      <div className={styles.img} />
      <div className={styles.texts}>
        <p className={styles.status}></p>
        <p className={styles.title}></p>
        <p className={styles.subtitle}></p>
        <p className={styles.price}></p>
      </div>
    </Skeleton>
  );
};

export default ReservationCardSkeleton;
