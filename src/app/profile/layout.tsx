'use client';

import AccountCheck from '@/assets/icons/account-check-outline.svg';
import CalendarCheck from '@/assets/icons/calendar-check-outline.svg';
import Cog from '@/assets/icons/cog-outline.svg';
import TextBoxCheck from '@/assets/icons/text-box-check-outline.svg';
import ProfileSideNavMenu from '@/components/profile/common/ProfileSideNavMenu';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import * as styles from './layout.css';

export default function ProfilePageLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [, setImageFile] = useState<File | null>(null);

  /** 제 페이지 외, url은 어떤 경로명으로 작업하실 지 몰라서 나중에 페이지 연결 해두겠습니다. */
  const profileSideMenuData = [
    {
      title: '내 정보',
      onClick: () => {
        router.push('/profile/mypage');
      },
      icon: <AccountCheck />,
    },
    {
      title: '예약 내역',

      icon: <TextBoxCheck />,
    },
    {
      title: '내 체험 관리',
      onClick: () => {
        router.push('/profile/my-activities');
      },
      icon: <Cog />,
    },
    {
      title: '예약 현황',
      icon: <CalendarCheck />,
    },
  ];

  return (
    <section className={styles.layout}>
      <ProfileSideNavMenu menuList={profileSideMenuData} setImageFile={(file: File) => setImageFile(file)} />
      <div>{children}</div>
    </section>
  );
}
