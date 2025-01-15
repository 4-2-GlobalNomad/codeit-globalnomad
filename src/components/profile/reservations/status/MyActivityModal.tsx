'use client';

import { response3, response4 } from '@/app/profile/reservations/status/mock_data';
import ButtonX from '@/assets/icons/btn-x.svg';
import DropDownB from '@/components/dropdown/DropDownB';
import { useState } from 'react';
import * as styles from './MyActivityModal.css';
import ReservationItem from './ReservationItem';

export interface ResForScheduleData {
  id: number;
  status: 'pending' | 'confirmed' | 'declined';
  totalPrice: number;
  headCount: number;
  nickname: string;
  userId: number;
  date: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
  activityId: number;
  scheduleId: number;
  reviewSubmitted: boolean;
  teamId: string;
}

export default function MyActivityModal(props: {
  handleModalState: () => void;
  modalProps: { date: Date | null; activityId: number | null };
}) {
  const [selected, setSelected] = useState<string>('');

  const month = props.modalProps.date == null ? 0 : props.modalProps.date.getMonth() + 1;
  const date = props.modalProps.date == null ? 0 : props.modalProps.date.getDate();

  const scheduleList = response3.map((item) => `${item.startTime} ~ ${item.endTime}`);
  // const scheduleIdList = response3.map((item) => item.scheduleId);

  // const id = props.modalProps.activityId;
  // const scheduledId = scheduleIdList[scheduleList.indexOf(selected)];
  // -> res4 api에 이용

  const handleSelect = (i: string) => {
    setSelected(i);
  };

  return (
    <div className={styles.background} onClick={props.handleModalState}>
      <div className={styles.modalArea} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.title}>{`${month}월 ${date}일 예약 정보`}</h3>
          <ButtonX className={styles.btnX} />
        </div>
        <div className={styles.context}>
          <div className={styles.bundle}>
            <p className={styles.miniHeader}>체험 시간</p>
            <DropDownB options={scheduleList} onSelect={handleSelect} placeholder='00:00 ~ 00:00' width='300px' />
          </div>
          <div className={styles.bundle}>
            <p className={styles.miniHeader}>{selected} 예약 목록</p>
            {response4.reservations.map((item: ResForScheduleData, j: number) => (
              <ReservationItem item={item} key={j} />
            ))}
            {/* pending에 대해서... confirmed, declined에 대해서도 해야함 */}
          </div>
        </div>
      </div>
    </div>
  );
}
