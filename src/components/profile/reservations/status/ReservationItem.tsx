import { Button } from '@/components/button/Button';
import { ResForScheduleData } from './MyActivityModal';
import * as styles from './ReservationItem.css';

export default function ReservationItem(props: { item: ResForScheduleData; key: number }) {
  // console.log('resItem: ', props.item);

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
          <Button label='승인하기' className={styles.button} variant='solid' />
          <Button label='거절하기' className={styles.button} variant='outline' />
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
