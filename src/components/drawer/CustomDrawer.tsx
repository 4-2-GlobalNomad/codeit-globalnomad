import AccountCheck from '@/assets/icons/account-check-outline.svg';
import CalendarCheck from '@/assets/icons/calendar-check-outline.svg';
import Cog from '@/assets/icons/cog-outline.svg';
import TextBoxCheck from '@/assets/icons/text-box-check-outline.svg';
import DefaultUser from '@/assets/images/default-user.png';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { CgMenuRound } from 'react-icons/cg';
import * as styles from './CustomDrawer.css';

type CustomDrawer = {
  // setImageFile: (file: File) => void;
  title: string;
  onClick?: () => void;
  icon: React.JSX.Element;
};

export default function CustomDrawer() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      const { nickname } = JSON.parse(storedUserInfo);
      setUserName(nickname);
    }
  }, []);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const [previewImageSrc] = useState<string | null>(null);

  const profileMenuList = [
    {
      title: '내 정보',
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
        router.push('/profile/my-activities');
      },
      icon: <Cog />,
    },
    {
      title: '예약 현황',
      icon: <CalendarCheck />,
    },
  ];
  const DrawerList = (
    <Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
      <List className={styles.drawerListLayout}>
        <div className={styles.profileUserNameLayout}>
          <div className={styles.profileImageContainer}>
            <div className={styles.profileImageBox}>
              {previewImageSrc ? (
                <Image src={previewImageSrc} alt='프로필 이미지' className={styles.profileImage} fill />
              ) : (
                <Image src={DefaultUser} alt='프로필 이미지' className={styles.defaultImage} width={60} height={60} />
              )}
            </div>
          </div>
          {userName && <span>{userName}</span>}
        </div>
        <div className={styles.profileMenuListContainer}>
          {profileMenuList.map((v: CustomDrawer) => (
            <ListItem key={v.title} disablePadding>
              <ListItemButton onClick={v.onClick}>
                <ListItemIcon>{v.icon}</ListItemIcon>
                <ListItemText primary={v.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </div>
      </List>
      <Divider />
    </Box>
  );
  return (
    <>
      <button onClick={toggleDrawer(true)}>
        <CgMenuRound color='#1b1b1b' size={30} />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}
