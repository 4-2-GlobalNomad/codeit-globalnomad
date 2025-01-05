import Check from '@/assets/icons/check.svg';
import * as styles from './CancelModal.css';

export default function CancelModal(props: { handleModalState: () => void }) {
  return (
    <div className={styles.content}>
      <div className={styles.checkmark}>
        <Check />
      </div>
      <p className={styles.message}>예약을 취소하시겠어요?</p>
      <div className={styles.buttonBar}>
        <button className={styles.button} onClick={props.handleModalState}>
          아니오
        </button>
        <button className={styles.button} onClick={props.handleModalState}>
          취소하기
        </button>
      </div>
    </div>
  );
}
