'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import * as styles from './DropDown.css';

export const Dropdown: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: string) => {
    if (option === '마이페이지') {
      router.push('/mypage');
    } else if (option === '로그아웃') {
      localStorage.removeItem('accessToken');

      router.push('/login');

      setTimeout(() => {
        window.location.href = '/login';
      }, 0);
    }
    setDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.avatarContainer} ref={dropdownRef}>
      <div onClick={() => setDropdownOpen((prev) => !prev)}>
        <Image src='/avatar.svg' alt='사용자 아바타' className={styles.avatar} width={40} height={40} />
      </div>
      {isDropdownOpen && (
        <div className={styles.dropdown}>
          <button className={styles.dropdownItem} onClick={() => handleOptionClick('마이페이지')}>
            마이페이지
          </button>
          <button className={styles.dropdownItem} onClick={() => handleOptionClick('로그아웃')}>
            로그아웃
          </button>
        </div>
      )}
    </div>
  );
};
