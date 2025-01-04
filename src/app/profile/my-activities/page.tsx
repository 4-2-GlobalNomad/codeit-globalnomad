'use client';

import CardList from '@/components/profile-activities/CardList';
import { useRouter } from 'next/navigation';
import * as styles from './page.css';

export default function MyActivitiesPage() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/profile/my-activities/create');
  };
  return (
    <div className={styles.activitiesPageContainer}>
      <div className={styles.topLayout}>
        <h2 className={styles.h2Title}>내 체험 관리</h2>
        <button onClick={handleClick} className={styles.createButton}>
          체험 등록하기
        </button>
      </div>
      <CardList />
    </div>
  );
}
