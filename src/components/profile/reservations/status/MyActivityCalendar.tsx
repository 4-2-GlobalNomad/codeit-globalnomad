import dayjs from 'dayjs';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
// import * as styles from './MyActivityCalendar.css';
import './MyActivityCalendar.css';

interface Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

export default function MyActivityCalendar() {
  const localizer = dayjsLocalizer(dayjs);

  const myEventsList: Event[] = [
    { id: 0, title: '1111', start: new Date('2025-1-16'), end: new Date('2025-1-16') },
    { id: 1, title: '2222', start: new Date('2025-1-16'), end: new Date('2025-1-16') },
    { id: 2, title: '3333', start: new Date('2025-1-16'), end: new Date('2025-1-16') },
    { id: 3, title: '4444', start: new Date('2025-1-16'), end: new Date('2025-1-16') },
  ];
  return (
    <Calendar
      // className={styles.calendar}
      localizer={localizer}
      events={myEventsList}
      // startAccessor='start'
      // endAccessor='end'
    />
  );
}
