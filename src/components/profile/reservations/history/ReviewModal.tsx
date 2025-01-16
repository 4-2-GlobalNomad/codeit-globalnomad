import { reviewMyReservations } from '@/apis/my-reservations';
import ButtonX from '@/assets/icons/btn-x.svg';
import { Button } from '@/components/button/Button';
import Image from 'next/image';
import { useState } from 'react';
import RatingInput from './RatingInput';
import { ReservationData } from './ReservationCard';
import * as styles from './ReviewModal.css';

export default function ReviewModal(props: { handleModalState: () => void; data: ReservationData }) {
  const [stars, setStars] = useState<boolean[]>([false, false, false, false, false]);
  const [comment, setComment] = useState<string>('');

  const date = props.data.date.split('-').map(Number).join('. ');
  const price = (props.data.totalPrice / props.data.headCount).toLocaleString();
  const title = props.data.activity.title;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    const rating = stars.filter((element) => element === true).length;
    reviewMyReservations(props.data.id, rating, comment);
    props.handleModalState();
  };

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h2 className={styles.modalTitle}>리뷰 작성</h2>
        <ButtonX className={styles.btnX} onClick={props.handleModalState} />
      </div>
      <div className={styles.info}>
        <Image
          className={styles.img}
          src={props.data.activity.bannerImageUrl}
          width={126}
          height={126}
          loading='lazy'
          alt={'액티비티 대표 이미지'}
        />
        <div className={styles.texts}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>
            {date} · {props.data.startTime} - {props.data.endTime} · {props.data.headCount}명
          </p>
          <p className={styles.price}>￦{price}</p>
        </div>
      </div>
      <RatingInput stars={stars} setStars={setStars} />
      <textarea
        className={styles.input}
        placeholder='후기를 작성해주세요'
        value={comment}
        onChange={handleChange}
      ></textarea>
      <Button label='작성하기' className={styles.button} onClick={handleSubmit} variant='solid' />
    </div>
  );
}
