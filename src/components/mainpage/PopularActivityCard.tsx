import { ActivityInfo, CurrentViewedActivity } from '@/types/mainpage';
import {
  getCurrentViewedActivity,
  getRecentlyViewedActivities,
  setCurrentViewedActivity,
  setRecentlyViewedActivities,
} from '@/utils/recent-activities';
import Rating from '../rating/Rating';
import * as styles from './PopularActivityCard.css';

interface PopularActivityCardProps {
  cardData: ActivityInfo;
}

const PopularActivityCard = ({
  cardData: { id, title, price, bannerImageUrl, rating, reviewCount },
}: PopularActivityCardProps) => {
  const handleClick = () => {
    setCurrentViewedActivity({ id, title, price, bannerImageUrl, rating, reviewCount });
    const viewedActivity = getCurrentViewedActivity();

    if (viewedActivity) {
      let viewedList = getRecentlyViewedActivities();
      viewedList = viewedList.filter((activity: CurrentViewedActivity) => activity.id !== viewedActivity.id);
      viewedList.unshift(viewedActivity);

      if (viewedList.length > 6) {
        viewedList = viewedList.slice(0, 6);
      }

      setRecentlyViewedActivities(viewedList);
    }

    window.location.href = `/activity/${id}`;
  };

  return (
    <div onClick={handleClick} className={styles.cardContainer}>
      <div className={styles.imageContainer} style={{ backgroundImage: `url('${bannerImageUrl}')` }}>
        <div className={styles.overlay} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.ratingContainer}>
          <Rating rating={rating} reviewCount={reviewCount} />
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.priceContainer}>
          {`₩ ${price}`}
          <span className='text-sm'>/인</span>
        </div>
      </div>
    </div>
  );
};

export default PopularActivityCard;
