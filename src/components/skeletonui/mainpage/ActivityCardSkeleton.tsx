import Rating from '@/components/rating/Rating';
import * as styles from './ActivityCardSkeleton.css';

const ActivityCardSkeleton = () => {
  const ratingValue = 0;
  const reviewCount = 0;
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonImage} />
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonHeader}>
          <Rating rating={ratingValue} reviewCount={reviewCount} darkMode small />
          <div className={styles.skeletonStarText} />
        </div>
        <div className={styles.skeletonTitle} />
        <div className={styles.skeletonFooter}>
          <div className={styles.skeletonButton} />
          <span>/</span>
          <div className={styles.skeletonIcon} />
        </div>
      </div>
    </div>
  );
};

export default ActivityCardSkeleton;
