import { ActivityInfo } from '@/types/mainpage';
import priceToWon from '@/utils/pricetowon';
import {
  CurrentViewedActivity,
  getCurrentViewedActivity,
  getRecentlyViewedActivities,
  setCurrentViewedActivity,
  setRecentlyViewedActivities,
} from '@/utils/recent-activities';
import Rating from '../rating/Rating';
import * as styles from './ActivityCard.css';

interface ActivityCardProps {
  cardData: ActivityInfo;
}

const ActivityCard = ({ cardData: { id, title, price, bannerImageUrl, rating, reviewCount } }: ActivityCardProps) => {
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
    <div className={styles.activityCardWrapper} onClick={handleClick}>
      <div className={styles.activityCardInnerWrapper}>
        <div className={styles.activityCardImage} style={{ backgroundImage: `url(${bannerImageUrl})` }} />
        <div className={styles.activityCardDetails}>
          <div className={styles.ratingWrapper}>
            <Rating rating={rating} reviewCount={reviewCount} small />
          </div>
          <div className={styles.activityTitle}>{title}</div>
          <div className={styles.priceWrapper}>
            {priceToWon(price)}
            <span className={styles.perPersonText}>/인</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
