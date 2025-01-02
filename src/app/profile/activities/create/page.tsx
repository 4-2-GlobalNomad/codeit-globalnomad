'use client';

import MyActivitiesCreate from '@/components/profile/my-activities-create/MyActivitiesCreate';
import React, { useState } from 'react';
import * as styles from './page.css';

/*  체험관리 페이지와 동일한 레이아웃과 스타일부분 추후 수정 필요!! */
export default function MyActivitiesCreatePage() {
  const [selectedCategory, setSelectedCategory] = useState('카테고리');
  const categories = ['문화 · 예술', '식음료', '스포츠', '투어', '관광', '웰빙'];

  return (
    <div className={styles.activitiesPageContainer}>
      <div className={styles.topLayout}>
        <h2 className={styles.h2Title}>내 체험 등록</h2>
        <button className={styles.createButton}>등록하기</button>
      </div>
      <MyActivitiesCreate usage={selectedCategory} options={categories} setOption={setSelectedCategory} />
    </div>
  );
}
