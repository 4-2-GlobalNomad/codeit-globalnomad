'use client';

import DropDownB from '@/components/dropdown/DropDownB';
import * as styles from './MyActivityModal.css';

export default function MyActivityModal(props: {
  handleModalState: () => void;
  modalProps: { date: Date | null; activityId: number | null };
}) {
  const month = props.modalProps.date == null ? 0 : props.modalProps.date.getMonth() + 1;
  const date = props.modalProps.date == null ? 0 : props.modalProps.date.getDate();

  return (
    <div className={styles.background} onClick={props.handleModalState}>
      <div className={styles.modalArea} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.header}>{`${month}월 ${date}일 예약 정보`}</h3>
        <div>
          <p className={styles.miniHeader}>시간대</p>
          <DropDownB options={[]} onSelect={() => {}} placeholder='시간대를 선택해 주세요' />
        </div>
        <div>
          <p className={styles.miniHeader}>예약 내역</p>
        </div>
      </div>
    </div>
  );
}
