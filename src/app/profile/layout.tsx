'use client';

import AccountCheck from '@/assets/icons/account-check-outline.svg';
import CalendarCheck from '@/assets/icons/calendar-check-outline.svg';
import Cog from '@/assets/icons/cog-outline.svg';
import TextBoxCheck from '@/assets/icons/text-box-check-outline.svg';
import ProfileSideNavMenu from '@/components/profile/common/ProfileSideNavMenu';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function ProfilePageLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [imageFile, setImageFile] = useState<File | null>(null);

  const profileSideMenuData = [
    {
      title: '내 정보',
      onClick: () => {
        router.push('/profile/my-info');
      },
      icon: <AccountCheck />,
    },
    {
      title: '예약 내역',
      onClick: () => {
        router.push('/profile/reservations/history');
      },
      icon: <TextBoxCheck />,
    },
    {
      title: '내 체험 관리',
      onClick: () => {
        router.push('/profile/my-experiences');
      },
      icon: <Cog />,
    },
    {
      title: '예약 현황',
      onClick: () => {
        router.push('/profile/reservations/status');
      },
      icon: <CalendarCheck />,
    },
  ];

  return (
    <section>
      <ProfileSideNavMenu menuList={profileSideMenuData} setImageFile={(file: File) => setImageFile(file)} />
      <div>{children}</div>
    </section>
  );
}
