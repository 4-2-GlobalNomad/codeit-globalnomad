import ArrowLeft from '@/assets/icons/double-arrow-left.svg';
import ArrowRight from '@/assets/icons/double-arrow-right.svg';
import { ToolbarProps } from 'react-big-calendar';
import { CalendarEvent } from './MyActivityCalendar';

export default function Toolbar(props: ToolbarProps<CalendarEvent>) {
  const date = props.date;

  // console.log('toolbar props: ', props);
  // console.log('date: ', date);
  // console.log('date type: ', typeof date);

  const prevMonth = () => {
    props.onNavigate('PREV');
  };

  const nextMonth = () => {
    props.onNavigate('NEXT');
  };

  return (
    <div className='rbc-toolbar'>
      {/* <ArrowLeft /> */}
      <span className='rbc-btn-group'>
        <ArrowLeft className='button' onClick={prevMonth} />

        <span className='rbc-toolbar-label'>{`${date.getFullYear()}년 ${date.getMonth() + 1}월`}</span>

        <ArrowRight className='button' onClick={nextMonth} />
      </span>
    </div>
  );
}
