import { CalendarEvent } from '@/app/profile/reservations/status/page';
import dayjs from 'dayjs';
import { useCallback, useState } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import { createPortal } from 'react-dom';
// import * as styles from './MyActivityCalendar.css';
import './MyActivityCalendar.css';
import MyActivityModal from './MyActivityModal';
import Toolbar from './Toolbar';

export default function MyActivityCalendar(props: { eventList: CalendarEvent[]; activityId: number }) {
  const localizer = dayjsLocalizer(dayjs);
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [modalProps, setModalProps] = useState<{ date: Date | null; activityId: number }>({
    date: null,
    activityId: 0,
  });

  const handleModalState = () => setShowModal(!showModal);

  const onNavigate = useCallback((newDate: Date) => setDate(newDate), [setDate]);

  // event 종류에 따른 스타일 변경
  const eventPropGetter = useCallback(
    (event: CalendarEvent) => ({
      ...(event.title.slice(0, 2) === '완료' && {
        style: {
          backgroundColor: '#dddddd',
          color: '#4b4b4b',
        },
      }),
      ...(event.title.slice(0, 2) === '승인' && {
        style: {
          backgroundColor: '#FFF4E8',
          color: '#FF7C1D',
        },
      }),
    }),
    [],
  );

  const onSelectEvent = useCallback(
    (event: CalendarEvent) => {
      setModalProps({ date: event.start, activityId: props.activityId });
      // console.log('modal props: ', modalProps);
      setShowModal(!showModal);
      // 완료된 체험인 경우 -> 모달x 다이얼로그 처리('완료된 체험 입니다')
    },
    [props.activityId, showModal],
  );

  return (
    <div>
      <Calendar<CalendarEvent>
        // className={styles.calendar}
        date={date}
        localizer={localizer}
        events={props.eventList}
        // startAccessor='start'
        // endAccessor='end'
        onNavigate={onNavigate}
        onSelectEvent={onSelectEvent}
        eventPropGetter={eventPropGetter}
        components={{
          toolbar: Toolbar,
        }}
      />
      {showModal &&
        createPortal(<MyActivityModal handleModalState={handleModalState} modalProps={modalProps} />, document.body)}
    </div>
  );
}
