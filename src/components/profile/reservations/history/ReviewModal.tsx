import ButtonX from '@/assets/icons/btn-x.svg';
import Image from 'next/image';
import RatingInput from './RatingInput';
import { ReservationData } from './ReservationCard';
import * as styles from './ReviewModal.css';

export default function ReviewModal(props: { handleModalState: () => void; data: ReservationData }) {
  const date = props.data.date.split('-').map(Number).join('. ');
  const price = (props.data.totalPrice / props.data.headCount).toLocaleString();
  let title = props.data.activity.title;
  if (title.length > 20) {
    title = title.slice(0, 19) + ' ···';
  }

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h2 className={styles.modalTitle}>후기 작성</h2>
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
      <RatingInput />
      <textarea className={styles.input} placeholder='후기를 작성해주세요'></textarea>
      <button className={styles.button} onClick={props.handleModalState}>
        작성하기
      </button>
    </div>
  );
}
