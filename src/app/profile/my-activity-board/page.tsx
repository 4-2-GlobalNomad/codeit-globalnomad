'use client';

import { fetchMyActivityList, fetchMyCalendarEvent } from '@/apis/my-activity-board';
import DropDownB from '@/components/dropdown/DropDownB';
import MyActivityCalendar from '@/components/profile/my-activity-board/MyActivityCalendar';
import { useEffect, useMemo, useState } from 'react';
import * as styles from './page.css';

// 1단계: /my-activities api 요청, 체험 리스트(체험id) 받아오기. 달력은 빈 달력.
// 1-2단계: 사용자가 드롭다운으로 특정 체험 선택
// 2단계:  /my-activities/{activityId}/reservation-dashboard api 요청. 날짜마다 completed/confirmed/pending 예약 건수 확인, 간단하게 그려주기 가능.
// 2-2단계: 사용자가 특정 일자 선택(date)
// 3단계: -> /my-activities/{activityId}/reserved-schedule api 요청. 스케줄마다(스케줄id) declined/confirmed/pending 건수 확인, 신청2 승인1 거절1 표기 가능.
// 4단계: -> /my-activities/{activityId}/reservations api 요청. 예약건 상세정보(이름, 인원수) 받아와 최종 렌더링.

interface Activity {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
}
export interface ActivityList {
  cursorId: number | null;
  totalCount: number;
  activities: Activity[];
}

interface EventForDate {
  date: string;
  reservations: {
    completed: number;
    confirmed: number;
    pending: number;
  };
}

export interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
}

export default function StatusPage() {
  // activityList -> 체험 선택 드롭다운
  // eventResponse -> eventList -> 달력에 그려질 이벤트
  const [activityList, setActivityList] = useState<ActivityList>({ cursorId: null, totalCount: 0, activities: [] });
  const [eventResponse, setEventResponse] = useState<EventForDate[]>([]);
  const [selected, setSelected] = useState<string>('');
  const [dropdownWidth, setDropdownWidth] = useState<string>('800px');

  useEffect(() => {
    fetchMyActivityList().then((res) => setActivityList(res));
  }, []);

  // console.log('fetchMyActivityList: ', activityList);

  useEffect(() => {
    const activityId = activityList.activities.find((item) => item.title === selected)?.id || 0;
    const date = new Date();

    if (activityId !== 0) {
      fetchMyCalendarEvent(
        activityId,
        date.getFullYear().toString(),
        (date.getMonth() + 1).toString().padStart(2, '0'),
      ).then((res) => setEventResponse(res));
    } else {
      setEventResponse([]);
    }
  }, [activityList.activities, selected]);

  // console.log('response: ', eventResponse);

  const eventList: CalendarEvent[] = useMemo(() => {
    const temp: CalendarEvent[] = [];

    eventResponse.forEach((item) => {
      const date = new Date(item.date);

      if (item.reservations.completed !== 0) {
        temp.push({ title: `완료 ${item.reservations.completed}`, start: date, end: date });
      }

      if (item.reservations.pending !== 0) {
        temp.push({ title: `예약 ${item.reservations.pending}`, start: date, end: date });
      }

      if (item.reservations.confirmed !== 0) {
        temp.push({ title: `승인 ${item.reservations.confirmed}`, start: date, end: date });
      }
    });

    return temp;
  }, [eventResponse]);

  // console.log('calendar items: ', eventList);

  const handleActivitySelect = (i: string) => {
    setSelected(i);
  };

  // 드롭다운 반응형(createPortal 때문에 width 100% 로 전달불가 / 개선 필요요)
  const handleWindowSize = () => {
    const winWidth = window.innerWidth;
    if (winWidth < 1199) {
      if (winWidth < 767) {
        setDropdownWidth('342px');
      } else {
        setDropdownWidth('429px');
      }
    } else {
      setDropdownWidth('800px');
    }
  };
  window.addEventListener('resize', handleWindowSize);

  return (
    <div className={styles.content}>
      <h1 className={styles.header}>예약 현황</h1>
      <DropDownB
        options={activityList.activities.map((item) => item.title)}
        placeholder='체험을 선택해 주세요'
        onSelect={handleActivitySelect}
        width={dropdownWidth}
      />
      <MyActivityCalendar
        eventList={eventList}
        activityId={activityList.activities.find((item) => item.title === selected)?.id || 0}
      />
    </div>
  );
}
