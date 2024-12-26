import { deleteAlarm, fetchAlarms } from '@/apis/Notifications';
import React from 'react';
import { useEffect, useState } from 'react';
import * as styles from './AlarmModal.css';

export interface Alarm {
  id: number;
  message: string;
  status: 'approved' | 'rejected';
  time: string;
}

interface AlarmModalProps {
  onClose: () => void;
}

export const AlarmModal: React.FC<AlarmModalProps> = ({ onClose }) => {
  const [alarms, setAlarms] = useState<Alarm[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadAlarms = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchAlarms('10-2', undefined, 10);
        setAlarms(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('알람 데이터를 가져오는 중 에러:', err);
        setError('알람 데이터를 가져오는 중 문제가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadAlarms();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteAlarm('10-2', id);
      setAlarms((prevAlarms) => prevAlarms.filter((alarm) => alarm.id !== id));
    } catch (err) {
      console.error('알람 삭제 중 에러:', err);
      alert('알람 삭제 중 문제가 발생했습니다.');
    }
  };

  if (loading) {
    return <div className={styles.modal}>로딩 중...</div>;
  }

  if (error) {
    return <div className={styles.modal}>{error}</div>;
  }

  return (
    <div
      className={styles.modal}
      onScroll={(e) => {
        const target = e.currentTarget;
        if (target.scrollHeight - target.scrollTop === target.clientHeight && !loading && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      }}
    >
      <div className={styles.header}>
        <span>알람 {alarms.length}개</span>
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
      </div>

      {alarms.length === 0 ? (
        <div className={styles.noAlarms}>알림이 없습니다.</div>
      ) : (
        alarms.map((alarm) => (
          <div key={alarm.id} className={styles.alarmItem}>
            <div>
              <p className={styles.message}>{alarm.message}</p>
              <span className={`${styles.status} ${alarm.status === 'approved' ? styles.approve : styles.reject}`}>
                {alarm.status === 'approved' ? '승인' : '거절'}
              </span>
              <span className={styles.time}>{alarm.time}</span>
              <button className={styles.deleteButton} onClick={() => handleDelete(alarm.id)}>
                ✖
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
