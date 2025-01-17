'use client';

import { fetchMyReservations, fetchMyReservedSchedule } from '@/apis/my-activity-board';
import ButtonX from '@/assets/icons/btn-x.svg';
import DropDownB from '@/components/dropdown/DropDownB';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import * as styles from './MyActivityModal.css';
import ReservationItem from './ReservationItem';

export interface Reservation {
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

interface ReservedSchedule {
  scheduleId: number;
  startTime: string;
  endTime: string;
  count: {
    pending: number;
    confirmed: number;
    declined: number;
  };
}

export default function MyActivityModal(props: {
  handleModalState: () => void;
  modalProps: { date: Date | null; activityId: number };
}) {
  const [scheduleList, setScheduleList] = useState<ReservedSchedule[]>([]);
  const [reservationList1, setReservationList1] = useState<Reservation[]>([]);
  const [reservationList2, setReservationList2] = useState<Reservation[]>([]);
  const [reservationList3, setReservationList3] = useState<Reservation[]>([]);
  const [selected, setSelected] = useState<string>('');
  const [scheduleId, setScheduleId] = useState<number>(0);

  const month = props.modalProps.date == null ? 0 : props.modalProps.date.getMonth() + 1;
  const date = props.modalProps.date == null ? 0 : props.modalProps.date.getDate();

  useEffect(() => {
    fetchMyReservedSchedule(props.modalProps.activityId, dayjs(props.modalProps.date).format('YYYY-MM-DD')).then(
      (res) => setScheduleList(res),
    );
  }, [props.modalProps.activityId, props.modalProps.date]);

  // console.log('scheduledList: ', scheduleList);

  useEffect(() => {
    if (scheduleId !== 0) {
      fetchMyReservations(props.modalProps.activityId, scheduleId, 'pending').then((res: Reservation[]) => {
        // console.log('res1: ', res); // [{...}] 꼴
        setReservationList1(res);
      });
    }
  }, [props.modalProps.activityId, scheduleId]);

  // console.log('reservation list 1:', reservationList1);

  useEffect(() => {
    if (scheduleId !== 0) {
      fetchMyReservations(props.modalProps.activityId, scheduleId, 'confirmed').then((res: Reservation[]) => {
        // console.log('res2: ', res);
        setReservationList2(res);
      });
    }
  }, [props.modalProps.activityId, scheduleId]);

  // console.log('reservation list 2:', reservationList2);

  useEffect(() => {
    if (scheduleId !== 0) {
      fetchMyReservations(props.modalProps.activityId, scheduleId, 'declined').then((res: Reservation[]) => {
        // console.log('res3: ', res);
        setReservationList3(res);
      });
    }
  }, [props.modalProps.activityId, scheduleId]);

  // console.log('reservation list 3:', reservationList3);

  useEffect(() => {
    if (scheduleList.length !== 0 && selected !== '') {
      const index = scheduleList.findIndex((item) => item.startTime === selected.slice(0, 5));
      setScheduleId(scheduleList[index].scheduleId);
    }
  }, [scheduleList, selected]);

  const handleSelect = (i: string) => {
    setSelected(i);
  };

  const handleClose = () => {
    props.handleModalState();
  };

  return (
    <div className={styles.background} onClick={props.handleModalState}>
      <div className={styles.modalArea} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.title}>{`${month}월 ${date}일 예약 정보`}</h3>
          <ButtonX className={styles.btnX} onClick={handleClose} />
        </div>
        <div className={styles.context}>
          <div className={styles.bundle}>
            <p className={styles.miniHeader}>체험 시간</p>
            <DropDownB
              options={scheduleList.map((item) => `${item.startTime} ~ ${item.endTime}`)}
              onSelect={handleSelect}
              placeholder='00:00 ~ 00:00'
              width='300px'
            />
          </div>
          <div className={styles.bundle}>
            <p className={styles.miniHeader}>예약 목록</p>
            {reservationList1.map((item: Reservation, j: number) => (
              <ReservationItem item={item} key={j} />
            ))}
            {reservationList2.map((item: Reservation, j: number) => (
              <ReservationItem item={item} key={j} />
            ))}
            {reservationList3.map((item: Reservation, j: number) => (
              <ReservationItem item={item} key={j} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
