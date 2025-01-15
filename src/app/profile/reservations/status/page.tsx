'use client';

import DropDownB from '@/components/dropdown/DropDownB';
import MyActivityCalendar from '@/components/profile/reservations/status/MyActivityCalendar';
import { Event } from '@/components/profile/reservations/status/MyActivityCalendar';
import { useState } from 'react';
import { response1, response2 } from './mock_data';
import * as styles from './page.css';

// 1단계: /my-activities api 요청, 체험 리스트(체험id) 받아오기. 달력은 빈 달력.
// 1-2단계: 사용자가 드롭다운으로 특정 체험 선택
// 2단계:  /my-activities/{activityId}/reservation-dashboard api 요청. 날짜마다 completed/confirmed/pending 예약 건수 확인, 간단하게 그려주기 가능.
// 2-2단계: 사용자가 특정 일자 선택(date)
// 3단계: -> /my-activities/{activityId}/reserved-schedule api 요청. 스케줄마다(스케줄id) declined/confirmed/pending 건수 확인, 신청2 승인1 거절1 표기 가능.
// 4단계: -> /my-activities/{activityId}/reservations api 요청. 예약건 상세정보(이름, 인원수) 받아와 최종 렌더링.

export default function StatusPage() {
  const [activity, setActivity] = useState<string>('');

  const activityList = response1.activities.map((item) => item.title);
  const activityId = response1.activities.find((item) => item.title === activity)?.id || 0;

  const eventList: Event[] = [];
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

  console.log('calendar items: ', eventList);

  const handleActivitySelect = (i: string) => {
    setActivity(i);
  };

  return (
    <div className={styles.content}>
      <h1 className={styles.header}>예약 현황</h1>
      <DropDownB
        options={activityList}
        placeholder='체험을 선택해 주세요'
        onSelect={handleActivitySelect}
        width='800px'
      />
      <MyActivityCalendar eventList={eventList} activityId={activityId} />
    </div>
  );
}
