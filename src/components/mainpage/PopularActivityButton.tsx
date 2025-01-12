import PopularLeftArrowBtn from '@/assets/icons/popular-arrow-left.svg';
import PoPularRightArrowBtn from '@/assets/icons/popular-arrow-right.svg';
import React from 'react';
import * as styles from './PopularActivityButton.css';

interface PopularActivityButtonProps {
  idx: number;
  onLeftClick: () => void;
  onRightClick: () => void;
}

const PopularActivityButton = ({ idx, onLeftClick, onRightClick }: PopularActivityButtonProps) => {
  return (
    <div className={styles.buttonContainer}>
      <button
        type='button'
        onClick={onLeftClick}
        disabled={idx === 0}
        aria-label='Go to previous Activity'
        className={`${styles.arrowButton} ${idx === 0 ? styles.arrowButtonDisabled : ''}`}
      >
        <PopularLeftArrowBtn className={styles.icon[idx === 0 ? 'disabled' : 'enabled']} />
      </button>

      <button
        type='button'
        onClick={onRightClick}
        disabled={idx === 8}
        aria-label='Go to next Activity'
        className={`${styles.arrowButton} ${idx === 8 ? styles.arrowButtonDisabled : ''}`}
      >
        <PoPularRightArrowBtn className={styles.icon[idx === 8 ? 'disabled' : 'enabled']} />
      </button>
    </div>
  );
};

export default PopularActivityButton;
