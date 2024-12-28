import CardList from '@/components/profile-activities/CardList';
import * as styles from './page.css';

export default function activitiesPage() {
  return (
    <div className={styles.activitiesPageContainer}>
      <div className={styles.topLayout}>
        <h2 className={styles.h2Title}>내 체험 관리</h2>
        <button className={styles.createButton}>체험 등록하기</button>
      </div>
      <CardList />
    </div>
  );
}
