import StarFill from '@/assets/icons/star-fill.svg';
import * as styles from './Ratings.css';

// 사용법: <Ratings rating={item.rating} reviewCount={item.reviewCount} darkMode small />

// dark mode: 기본은 defaultMode 검은글씨, darkMode 설정하면 흰글씨(true).
// small: 기본은 16px, small 설정하면 14px(true).

export default function Ratings(props: { rating: number; reviewCount: number; darkMode?: boolean; small?: boolean }) {
  return (
    <div className={styles.ratings}>
      <StarFill className={props.small ? styles.smallIcon : styles.defaultIcon} />
      <div className={props.darkMode ? styles.darkModeText : styles.defaultModeText}>
        <div className={props.small ? styles.smallSizeText : styles.defaultSizeText}>
          <p>
            {props.rating} ({props.reviewCount})
          </p>
        </div>
      </div>
    </div>
  );
}
