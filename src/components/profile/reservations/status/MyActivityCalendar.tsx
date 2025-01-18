import { CalendarEvent } from '@/app/profile/reservations/status/page';
import Dialog from '@/components/modal/Dialog';
import Modal from '@/components/modal/Modal';
import dayjs from 'dayjs';
import { useCallback, useState } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import { createPortal } from 'react-dom';
import './MyActivityCalendar.css';
import './MyActivityCalendarMedia.css';
import MyActivityModal from './MyActivityModal';
import Toolbar from './Toolbar';

export default function MyActivityCalendar(props: { eventList: CalendarEvent[]; activityId: number }) {
  const localizer = dayjsLocalizer(dayjs);
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [showCompletedDialog, setShowCompletedDialog] = useState(false);
  const [modalProps, setModalProps] = useState<{ date: Date | null; activityId: number }>({
    date: null,
    activityId: 0,
  });

  const handleModalState = () => setShowModal(!showModal);

  const handleDialogState = () => setShowCompletedDialog(!showCompletedDialog);

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
      if (event.title.slice(0, 2) === '완료') {
        // 완료된 체험 -> 조회api x, 다이얼로그로 연결
        setShowCompletedDialog(!showCompletedDialog);
      } else {
        // 미완료 체험
        setModalProps({ date: event.start, activityId: props.activityId });
        setShowModal(!showModal);
      }
    },
    [props.activityId, showCompletedDialog, showModal],
  );

  return (
    <div>
      <Calendar<CalendarEvent>
        date={date}
        localizer={localizer}
        events={props.eventList}
        onNavigate={onNavigate}
        onSelectEvent={onSelectEvent}
        eventPropGetter={eventPropGetter}
        components={{
          toolbar: Toolbar,
        }}
      />
      {showModal &&
        createPortal(<MyActivityModal handleModalState={handleModalState} modalProps={modalProps} />, document.body)}
      {showCompletedDialog &&
        createPortal(
          <Modal
            handleModalState={handleDialogState}
            content={<Dialog handleModalState={handleDialogState} message='이미 완료된 체험입니다' />}
          />,
          document.body,
        )}
    </div>
  );
}
