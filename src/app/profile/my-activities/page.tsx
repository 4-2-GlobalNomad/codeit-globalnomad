'use client';

import CustomDrawer from '@/components/drawer/CustomDrawer';
import CardList from '@/components/profile/my-activities/CardList';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import * as styles from './page.css';

export default function MyActivitiesPage() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isPCOrTablet, setIsPCOrTablet] = useState(false);
  const mobileQuery = useMediaQuery({ query: '(max-width: 767px)' });

  //{ query: '(min-width: 768px)' }
  const PCOrTabletQuery = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    setIsPCOrTablet(PCOrTabletQuery);
  }, [PCOrTabletQuery]);

  useEffect(() => {
    setIsMobile(mobileQuery);
  }, [mobileQuery]);
  const handleClick = () => {
    router.push('/profile/my-activities/create');
  };

  return (
    <div className={styles.myActivitiesPageContainer}>
      <div className={styles.topLayout}>
        {isMobile && (
          <>
            <div>
              <div className={styles.mobileMenuTitle}>
                <CustomDrawer />
                <h2 className={styles.h2Title}>내 체험 관리</h2>
              </div>
            </div>
            <button onClick={handleClick} className={styles.createButton}>
              체험 등록하기
            </button>
          </>
        )}
        {isPCOrTablet && (
          <>
            <h2 className={styles.h2Title}>내 체험 관리</h2>
            <button onClick={handleClick} className={styles.createButton}>
              체험 등록하기
            </button>
          </>
        )}
      </div>
      <CardList />
    </div>
  );
}
