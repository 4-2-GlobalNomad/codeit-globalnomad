import StarEmpty from '@/assets/icons/star-empty.svg';
import StarFill from '@/assets/icons/star-fill.svg';
import { useState } from 'react';
import * as styles from './RatingInput.css';

export default function RatingInput() {
  const [stars, setStars] = useState([false, false, false, false, false]);

  const handleClick = () => {
    setStars(stars);
  };

  return (
    <div className={styles.content}>
      {stars.map((data, i) =>
        data ? (
          <StarFill className={styles.star} key={i} onClick={handleClick} />
        ) : (
          <StarEmpty className={styles.star} key={i} onClick={handleClick} />
        ),
      )}
    </div>
  );
}
