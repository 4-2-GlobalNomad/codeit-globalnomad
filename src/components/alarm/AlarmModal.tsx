import { fetchAlarms } from '@/apis/notifications';
import React, { useCallback, useEffect, useState } from 'react';
import * as styles from './AlarmModal.css';

export interface Alarm {
  id: number;
  teamId: string;
  userId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}

export const AlarmModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [alarms, setAlarms] = useState<Alarm[]>([]);
  const [cursorId, setCursorId] = useState<number | null>(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadAlarms = useCallback(async () => {
    if (loading || !hasMore) {
      return;
    }

    setLoading(true);

    try {
      const { notifications, cursorId: newCursorId, totalCount } = await fetchAlarms('10-2', cursorId, 10);

      setAlarms((prevAlarms) => [...prevAlarms, ...notifications]);
      setCursorId(newCursorId);

      if (!notifications.length || alarms.length + notifications.length >= totalCount) {
        setHasMore(false);
      }
    } catch (err) {
      console.error('알람 데이터를 가져오는 중 에러:', err);
      setError('알람 데이터를 가져오는 중 문제가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  }, [cursorId, loading, hasMore, alarms.length]);

  useEffect(() => {
    loadAlarms();
  }, [loadAlarms]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (target.scrollHeight - target.scrollTop === target.clientHeight && !loading && hasMore) {
      setCursorId((prevCursorId) => (prevCursorId !== null ? prevCursorId + 1 : 0));
    }
  };

  return (
    <div className={styles.modal} onScroll={handleScroll}>
      <div className={styles.header}>
        <span>알림 {alarms.length}개</span>
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
      </div>
      {alarms.length === 0 && !loading && !error ? (
        <div className={styles.noAlarms}>알림이 없습니다.</div>
      ) : (
        alarms.map((alarm) => (
          <div key={alarm.id} className={styles.alarmItem}>
            <p>{alarm.content}</p>
            <span>{new Date(alarm.createdAt).toLocaleString()}</span>
          </div>
        ))
      )}
      {loading && <div>로딩 중...</div>}
      {error && <div>{error}</div>}
    </div>
  );
};
