import { fetchAlarms } from '@/apis/notifications';
import React, { useCallback, useEffect, useState } from 'react';
// API 호출 함수 가져오기
import * as styles from './AlarmModal.css';

export interface Alarm {
  id: number;
  teamId: string;
  userId: string;
  content: string;
  createdAt: string;
  status: 'confirmed' | 'declined';
}

export const AlarmModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [alarms, setAlarms] = useState<Alarm[]>([]);
  const [cursorId, setCursorId] = useState<number | null>(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadAlarms = useCallback(async () => {
    if (loading || !hasMore) {
      return;
    }

    setLoading(true);
    try {
      const { notifications, cursorId: newCursorId, totalCount } = await fetchAlarms('10-2', cursorId, 10); // API 호출
      setAlarms((prev) => [...prev, ...notifications]);
      setCursorId(newCursorId);

      if (!notifications.length || alarms.length + notifications.length >= totalCount) {
        setHasMore(false); // 데이터가 더 이상 없을 때
      }
    } catch (error) {
      console.error('알림 데이터를 가져오는 중 에러 발생:', error);
    } finally {
      setLoading(false);
    }
  }, [cursorId, loading, hasMore, alarms.length]);

  useEffect(() => {
    loadAlarms();
  }, [loadAlarms]);

  const timeAgo = (date: string) => {
    const diff = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
    if (diff < 60) {
      return `${diff}초 전`;
    }
    if (diff < 3600) {
      return `${Math.floor(diff / 60)}분 전`;
    }
    if (diff < 86400) {
      return `${Math.floor(diff / 3600)}시간 전`;
    }
    return `${Math.floor(diff / 86400)}일 전`;
  };

  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <span>알림 {alarms.length}개</span>
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
      </div>
      <div className={styles.alarmList}>
        {alarms.map((alarm) => (
          <div key={alarm.id} className={styles.alarmItem}>
            <div
              className={styles.statusDot}
              style={{ backgroundColor: alarm.status === 'confirmed' ? '#0085FF' : '#FF472A' }}
            />
            <div className={styles.alarmContent}>
              <p>{alarm.content}</p>
              <span className={styles.timeAgo}>{timeAgo(alarm.createdAt)}</span>
            </div>
            <button
              className={styles.deleteButton}
              onClick={() => setAlarms((prev) => prev.filter((item) => item.id !== alarm.id))}
            >
              ✖
            </button>
          </div>
        ))}
        {loading && <div className={styles.loading}>로딩 중...</div>}
        {!loading && alarms.length === 0 && <div className={styles.noAlarms}>알림이 없습니다.</div>}
      </div>
    </div>
  );
};
