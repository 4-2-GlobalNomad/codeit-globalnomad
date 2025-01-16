import Rating from '@/components/rating/Rating';
import Skeleton from '../Skeleton';
import * as styles from './PopularCardSkeleton.css';

const PopularCardSkeleton = () => {
  const ratingValue = 0;
  const reviewCount = 0;
  return (
    <Skeleton className={styles.skeleton}>
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonHeader}>
          <Rating rating={ratingValue} reviewCount={reviewCount} darkMode small />
          <p className={styles.skeletonStar} />
        </div>
        <div className={styles.skeletonTitle} />
        <div className={styles.skeletonFooter}>
          <p className={styles.skeletonUser} />
          <span className={styles.skeletonDivider}>/</span>
          <p className={styles.skeletonRating} />
        </div>
      </div>
    </Skeleton>
  );
};

export default PopularCardSkeleton;
