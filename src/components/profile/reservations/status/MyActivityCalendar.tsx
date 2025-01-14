import dayjs from 'dayjs';
import { useCallback, useState } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
// import * as styles from './MyActivityCalendar.css';
import './MyActivityCalendar.css';
import Toolbar from './Toolbar';

interface Event {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  resource?: unknown;
}

export default function MyActivityCalendar() {
  const localizer = dayjsLocalizer(dayjs);
  const [date, setDate] = useState(new Date());

  const onNavigate = useCallback((newDate: Date) => setDate(newDate), [setDate]);

  const myEventsList: Event[] = [
    { title: '1111', start: new Date('2025-1-16'), end: new Date('2025-1-16') },
    { title: '2222', start: new Date('2025-1-16'), end: new Date('2025-1-16') },
    { title: '3333', start: new Date('2025-1-16'), end: new Date('2025-1-16') },
    { title: '4444', start: new Date('2025-1-16'), end: new Date('2025-1-16') },
  ];
  return (
    <Calendar
      // className={styles.calendar}
      date={date}
      localizer={localizer}
      events={myEventsList}
      // startAccessor='start'
      // endAccessor='end'
      onNavigate={onNavigate}
      components={{
        toolbar: Toolbar,
      }}
    />
  );
}
