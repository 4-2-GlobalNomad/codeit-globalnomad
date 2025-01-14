import { ToolbarProps } from 'react-big-calendar';

export default function Toolbar(props: ToolbarProps<Event, object>) {
  const date = props.date;

  console.log('toolbar props: ', props);
  console.log('date: ', date);
  console.log('date type: ', typeof date);

  const prevMonth = () => {
    props.onNavigate('PREV');
  };

  const nextMonth = () => {
    props.onNavigate('NEXT');
  };

  return (
    <div className='rbc-toolbar'>
      <span className='rbc-btn-group'>
        <button type='button' onClick={prevMonth}>
          {'<<'}
        </button>
        <span className='rbc-toolbar-label'>{`${date.getFullYear()}년 ${date.getMonth() + 1}월`}</span>
        <button type='button' onClick={nextMonth}>
          {'>>'}
        </button>
      </span>
    </div>
  );
}
