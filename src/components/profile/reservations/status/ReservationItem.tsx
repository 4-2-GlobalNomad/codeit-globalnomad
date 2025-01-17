import { confirmReservation, declineReservation } from '@/apis/my-activity-board';
import { Button } from '@/components/button/Button';
import { Reservation } from './MyActivityModal';
import * as styles from './ReservationItem.css';

export default function ReservationItem(props: { item: Reservation; key: number }) {
  // console.log('resItem: ', props.item);

  const handleConfirm = () => {
    confirmReservation(props.item.activityId, props.item.id);
    //승인 후 바로 화면 업데이트 안됨
  };

  const handleDecline = () => {
    declineReservation(props.item.activityId, props.item.id);
  };

  return (
    <div className={styles.item}>
      <div className={styles.text}>
        <p>
          닉네임 <span className={styles.textBold}>{props.item.nickname}</span>
        </p>
        <p>
          인원 <span className={styles.textBold}>{props.item.headCount}</span>
        </p>
      </div>
      {props.item.status === 'pending' && (
        <div className={styles.buttonBar}>
          <Button label='승인하기' className={styles.button} variant='solid' onClick={handleConfirm} />
          <Button label='거절하기' className={styles.button} variant='outline' onClick={handleDecline} />
        </div>
      )}
      {props.item.status === 'confirmed' && (
        <div className={styles.buttonBar}>
          <div className={styles.confirmed}>예약 승인</div>
        </div>
      )}
      {props.item.status === 'declined' && (
        <div className={styles.buttonBar}>
          <div className={styles.declined}>예약 거절</div>
        </div>
      )}
    </div>
  );
}
