'use client';

import { fetchUserInfo } from '@/apis/users';
import Pen from '@/assets/icons/pen.svg';
import defaultUserImage from '@/assets/images/default-user.png';
import Image from 'next/image';
import React, { ChangeEvent, useEffect, useState } from 'react';
import * as styles from './ProfileSideNavMenu.css';

interface ProfileSideNavMenuProps {
  setImageFile: (file: File) => void;
  menuList: Array<{
    title: string;
    onClick?: () => void;
    icon: React.ReactNode;
  }>;
}

/**
 * @param setImageFile
 * ```
 * ------------------------------------------------------
 * const [imageFile, setImageFile] = useState<File | null>(null);
 *
 *  ...
 *
 * <ProfileSideNavMenu setImageFile={(file: File) => setImageFile(file)} ... />
 * ------------------------------------------------------
 * ```
 *
 * @param menuList
 * ```
 * ------------------------------------------------------
 * const router = useRouter();
 *
 * const menuList = [
 *   {
 *     title: '내 정보',
 *     onClick: () => {
 *       router.push('/profile/my-info');
 *     },
 *     icon: <AccountCheck />,
 *   },
 *   {
 *     title: '예약 내역',
 *     onClick: () => {
 *       router.push('/profile/reservations/history');
 *     },
 *     icon: <TextBoxCheck />,
 *   },
 *   {
 *     title: '내 체험 관리',
 *     onClick: () => {
 *       router.push('/profile/my-experiences');
 *     },
 *     icon: <Cog />,
 *   },
 *   {
 *     title: '예약 현황',
 *     onClick: () => {
 *       router.push('/profile/reservations/status');
 *     },
 *     icon: <CalendarCheck />,
 *   },
 * ];
 *
 *  ...
 *
 * <ProfileSideNavMenu menuList={profileSideMenuData} ... />
 * ------------------------------------------------------
 * ```
 * @returns React.JSX.Element
 */
export default function ProfileSideNavMenu(props: ProfileSideNavMenuProps) {
  const [previewImageSrc, setPreviewImageSrc] = useState<string | null>(null);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);

  const loadUserInfo = async () => {
    try {
      const userInfo = await fetchUserInfo();
      setProfileImageUrl(userInfo.profileImageUrl || null);
    } catch (error) {
      console.error('유저 정보 가져오기 실패:', error);
    }
  };

  useEffect(() => {
    loadUserInfo();
  }, []);

  const encodeFileToBase64 = (fileBlob: File) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setPreviewImageSrc(reader.result);
        }

        resolve(reader.result);
      };
    });
  };

  const handleImagePreview = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      props.setImageFile(selectedFile);
      encodeFileToBase64(selectedFile);
    }
  };

  return (
    <aside className={styles.profileSideNavMenu}>
      <div className={styles.profileImageContainer}>
        <div className={styles.profileImageBox}>
          {previewImageSrc ? (
            <Image src={previewImageSrc} alt='프로필 이미지' className={styles.profileImage} fill />
          ) : profileImageUrl ? (
            <Image src={profileImageUrl} alt='프로필 이미지' className={styles.profileImage} fill />
          ) : (
            <Image src={defaultUserImage} alt='프로필 이미지' className={styles.defaultImage} width={60} height={60} />
          )}
        </div>
        <label className={styles.penIconBox} htmlFor='file-upload'>
          <input id='file-upload' type='file' className={styles.fileInput} onChange={handleImagePreview} />
          <Pen className={styles.penIconImage} />
        </label>
      </div>
      <nav className={styles.navContainer}>
        <ul className={styles.navListBox}>
          {props.menuList.map((item, index) => {
            return (
              <li key={index} className={styles.navTextBox}>
                <button onClick={item.onClick} className={styles.navText}>
                  {item.icon}
                  <span>{item.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
