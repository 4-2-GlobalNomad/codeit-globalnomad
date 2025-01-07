'use client';

import MyActivitiesCreate from '@/components/profile/my-activities-create/MyActivitiesCreate';
import { StyledEngineProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useState } from 'react';
import * as styles from './page.css';

export default function MyActivitiesCreatePage() {
  const [selectedCategory, setSelectedCategory] = useState('카테고리');
  const categories = ['문화 · 예술', '식음료', '스포츠', '투어', '관광', '웰빙'];

  return (
    <div className={styles.activitiesPageContainer}>
      <form>
        <div className={styles.topLayout}>
          <h2 className={styles.h2Title}>내 체험 등록</h2>
          <button className={styles.createButton} type='submit'>
            등록하기
          </button>
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StyledEngineProvider injectFirst>
            <MyActivitiesCreate usage={selectedCategory} options={categories} setOption={setSelectedCategory} />
          </StyledEngineProvider>
        </LocalizationProvider>
      </form>
    </div>
  );
}
