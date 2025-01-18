'use client';

import MeatballIcon from '@/assets/icons/meatball.svg';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import * as styles from './DropdownMenu.css';

interface DropdownMenuProps {
  activityId: number;
  handleDelete: (id: number) => void;
}

export default function DropdownMenu({ activityId, handleDelete }: DropdownMenuProps) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        disableRipple
        className={styles.button}
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MeatballIcon />
      </Button>
      <Menu
        sx={{ boxShadow: 'none !important' }}
        className={styles.menuContainer}
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem className={styles.menuItem} onClick={() => router.push(`/profile/my-activities/edit/${activityId}`)}>
          수정하기
        </MenuItem>
        <MenuItem
          className={styles.menuItem}
          onClick={() => {
            if (confirm('삭제 하시겠습니까?')) {
              handleDelete(activityId);
            }
          }}
        >
          삭제하기
        </MenuItem>
      </Menu>
    </div>
  );
}
