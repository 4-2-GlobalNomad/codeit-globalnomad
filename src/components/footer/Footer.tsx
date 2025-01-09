'use client';

import FacebookIcon from '@/assets/icons/facebook.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';
import YoutubeIcon from '@/assets/icons/youtube.svg';
import { usePathname } from 'next/navigation';
import React from 'react';
import * as styles from './Footer.css';

export const Footer = () => {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  if (isLoginPage) {
    return null;
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span>©codeit - 2023</span>
        <nav className={styles.text}>
          <a>Privacy Policy</a>
          <a>FAQ</a>
        </nav>
        <div className={styles.socialIcons}>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <FacebookIcon />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <TwitterIcon />
          </a>
          <a href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
            <YoutubeIcon />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};
