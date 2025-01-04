import Modal from '@/components/modal/Modal';
import Image from 'next/image';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import CancelModal from './CancelModal';
import * as styles from './ReservationCard.css';
import ReviewModal from './ReviewModal';

// interface StatusObj {
//   msg: string;
//   color: string;
//   cancelAvailable: boolean;
//   reviewAvailable: boolean;
// }

export interface ReservationData {
  activity: { id: number; title: string; bannerImageUrl: string };
  scheduleId: number;
  id: number;
  teamId: string;
  userId: number;
  status: string;
  reviewSubmitted: boolean;
  totalPrice: number;
  headCount: number;
  date: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
}

export const STATUS = {
  pending: { msg: '예약 신청', color: '#2EB4FF', cancelAvailable: true, reviewAvailable: false },
  confirm: { msg: '예약 승인', color: '#FF7C1D', cancelAvailable: false, reviewAvailable: false },
  decline: { msg: '예약 거절', color: '#ff472e', cancelAvailable: false, reviewAvailable: false },
  canceled: { msg: '예약 취소', color: '#79747E', cancelAvailable: false, reviewAvailable: false },
  completed: { msg: '체험 완료', color: '#79747E', cancelAvailable: false, reviewAvailable: true },
};

export default function ReservationCard(props: { data: ReservationData }) {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const handleCancelModalState = () => setShowCancelModal(!showCancelModal);

  const [showReviewModal, setShowReviewModal] = useState(false);
  const handleReviewModalState = () => setShowReviewModal(!showReviewModal);

  const status = props.data.status;
  let msg = '';
  let color = '';
  let cancelAvailable = false;
  let reviewAvailable = false;
  if (
    status === 'pending' ||
    status === 'confirm' ||
    status === 'decline' ||
    status === 'canceled' ||
    status === 'completed'
  ) {
    msg = STATUS[status].msg;
    color = STATUS[status].color;
    cancelAvailable = STATUS[status].cancelAvailable;
    reviewAvailable = STATUS[status].reviewAvailable;
  }

  const date = props.data.date.split('-').map(Number).join('. ');
  const price = (props.data.totalPrice / props.data.headCount).toLocaleString();
  let title = props.data.activity.title;
  if (title.length > 35) {
    title = title.slice(0, 34) + ' ···';
  }

  return (
    <div className={styles.card}>
      <Image
        className={styles.img}
        src={props.data.activity.bannerImageUrl}
        width={204}
        height={204}
        loading='lazy'
        alt={'액티비티 대표 이미지'}
      />
      <div className={styles.texts}>
        <p className={styles.status} style={{ color: `${color}` }}>
          {msg}
        </p>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>
          {date} · {props.data.startTime} - {props.data.endTime} · {props.data.headCount}명
        </p>
        <p className={styles.price}>￦{price}</p>
      </div>
      {cancelAvailable && (
        <button className={styles.button} onClick={handleCancelModalState}>
          예약 취소
        </button>
      )}
      {reviewAvailable && (
        <button className={styles.button} onClick={handleReviewModalState}>
          리뷰 작성
        </button>
      )}
      {showCancelModal &&
        createPortal(
          <Modal
            handleModalState={handleCancelModalState}
            content={<CancelModal handleModalState={handleCancelModalState} />}
          />,
          document.body,
        )}
      {showReviewModal &&
        createPortal(
          <Modal
            handleModalState={handleReviewModalState}
            content={<ReviewModal handleModalState={handleReviewModalState} data={props.data} />}
          />,
          document.body,
        )}
    </div>
  );
}
