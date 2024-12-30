'use client';

import AlarmIcon from '@/assets/icons/alarm.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { AlarmModal } from '../alarm/AlarmModal';
import { Dropdown } from './DropDown';
import * as styles from './Header.css';

export const Header: React.FC = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    setIsLoggedIn(Boolean(accessToken));
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer} onClick={() => router.push('/')}>
        <Image src='/icons/logo.svg' alt='GlobalNomad 로고' className={styles.logoImage} width={172} height={30} />
      </div>

      {isLoggedIn ? (
        // 로그인
        <div className={styles.userInfo}>
          <button className={styles.notificationButton} onClick={() => setModalOpen(true)}>
            <AlarmIcon />
          </button>
          <div className={styles.divider}></div>
          <Dropdown />
        </div>
      ) : (
        // 비 로그인
        <div className={styles.authButtons}>
          <button onClick={() => router.push('/login')} className={styles.authButton}>
            로그인
          </button>
          <button onClick={() => router.push('/signup')} className={styles.authButton}>
            회원가입
          </button>
        </div>
      )}
      {/* 알람 모달 */}
      {isModalOpen && <AlarmModal onClose={() => setModalOpen(false)} />}
    </header>
  );
};