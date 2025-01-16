import Empty from '@/assets/icons/empty.svg';
import * as styles from './EmptyCard.css';

export default function EmptyCard() {
  return (
    <div className={styles.container}>
      <Empty className={styles.icon} />
      <p className={styles.message}>아직 신청한 체험이 없어요</p>
    </div>
  );
}
