import AccountCheck from '@/assets/icons/account-check-outline.svg';
import CalendarCheck from '@/assets/icons/calendar-check-outline.svg';
import Cog from '@/assets/icons/cog-outline.svg';
import TextBoxCheck from '@/assets/icons/text-box-check-outline.svg';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { CgMenuRound } from 'react-icons/cg';

type CustomDrawer = {
  // setImageFile: (file: File) => void;
  title: string;
  onClick?: () => void;
  icon: React.JSX.Element;
};

export default function CustomDrawer() {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const profileMenuList = [
    {
      title: '내 정보',
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
  const DrawerList = (
    <Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
      <List>
        {profileMenuList.map((v: CustomDrawer) => (
          <ListItem key={v.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>{v.icon}</ListItemIcon>
              <ListItemText primary={v.title} />
            </ListItemButton>
          </ListItem>
        ))}
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
