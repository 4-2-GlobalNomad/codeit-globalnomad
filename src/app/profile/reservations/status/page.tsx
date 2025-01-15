'use client';

import { fetchMyActivityList } from '@/apis/my-activity-board';
import DropDownB from '@/components/dropdown/DropDownB';
import MyActivityCalendar from '@/components/profile/reservations/status/MyActivityCalendar';
import { CalendarEvent } from '@/components/profile/reservations/status/MyActivityCalendar';
import { useEffect, useState } from 'react';
import { response2 } from './mock_data';
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

export default function StatusPage() {
  const [activityList, setActivityList] = useState<ActivityList>({ cursorId: null, totalCount: 0, activities: [] });
  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    fetchMyActivityList().then((res) => setActivityList(res));
  }, []);

  // console.log('fetchMyActivityList: ', activityList);

  const eventList: CalendarEvent[] = [];
  response2.forEach((item) => {
    const date = new Date(item.date);

    if (item.reservations.completed !== 0) {
      eventList.push({ title: `완료 ${item.reservations.completed}`, start: date, end: date });
    }

    if (item.reservations.pending !== 0) {
      eventList.push({ title: `예약 ${item.reservations.pending}`, start: date, end: date });
    }

    if (item.reservations.confirmed !== 0) {
      eventList.push({ title: `승인 ${item.reservations.confirmed}`, start: date, end: date });
    }
  });

  // console.log('calendar items: ', eventList);

  const handleActivitySelect = (i: string) => {
    setSelected(i);
  };

  return (
    <div className={styles.content}>
      <h1 className={styles.header}>예약 현황</h1>
      <DropDownB
        options={activityList.activities.map((item) => item.title)}
        placeholder='체험을 선택해 주세요'
        onSelect={handleActivitySelect}
        width='800px'
      />
      <MyActivityCalendar
        eventList={eventList}
        activityId={activityList.activities.find((item) => item.title === selected)?.id || 0}
      />
    </div>
  );
}
