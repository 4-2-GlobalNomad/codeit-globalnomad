import { cancelMyReservations } from '@/apis/my-reservations';
import Check from '@/assets/icons/check.svg';
import { Button } from '@/components/button/Button';
import * as styles from './CancelModal.css';

export default function CancelModal(props: { handleModalState: () => void; reservationId: number }) {
  const handleCancel = () => {
    cancelMyReservations(props.reservationId);
    props.handleModalState();
  };

  return (
    <div className={styles.content}>
      <div className={styles.checkmark}>
        <Check />
      </div>
      <p className={styles.message}>예약을 취소하시겠어요?</p>
      <div className={styles.buttonBar}>
        <Button label='아니오' className={styles.button} onClick={props.handleModalState} variant='outline' />
        <Button label='취소하기' className={styles.button} onClick={handleCancel} variant='solid' />
      </div>
    </div>
  );
}
