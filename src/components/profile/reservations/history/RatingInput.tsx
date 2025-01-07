import StarEmpty from '@/assets/icons/star-empty.svg';
import StarFill from '@/assets/icons/star-fill.svg';
import { useState } from 'react';
import * as styles from './RatingInput.css';

export default function RatingInput() {
  const [stars, setStars] = useState([false, false, false, false, false]);

  const handleClick = (i: number) => {
    const newStars = [];

    let j = 0;
    while (j < 5) {
      if (j <= i) {
        newStars[j] = true;
      } else {
        newStars[j] = false;
      }
      j++;
    }

    setStars(newStars);
  };

  return (
    <div className={styles.content}>
      {stars.map((data, i) =>
        data ? (
          <StarFill className={styles.star} key={i} onClick={() => handleClick(i)} />
        ) : (
          <StarEmpty className={styles.star} key={i} onClick={() => handleClick(i)} />
        ),
      )}
    </div>
  );
}
