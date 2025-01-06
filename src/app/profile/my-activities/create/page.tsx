'use client';

import Input from '@/components/Input';
import MyActivitiesCreate from '@/components/profile/my-activities-create/MyActivitiesCreate';
import { StyledEngineProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/ko';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import * as styles from './page.css';

export default function MyActivitiesCreatePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    control,
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (!data.title) {
      setError('title', { type: 'manual', message: '제목은 필수 입력 사항입니다.' });
    }

    if (!data.category) {
      setError('category', { type: 'manual', message: '카테고리는 필수 선택 사항입니다.' });
    }

    if (data.title && data.category) {
      clearErrors(); // 모든 에러 제거
      console.log('Submitted data:', data);
    }
  };
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = ['문화 · 예술', '식음료', '스포츠', '투어', '관광', '웰빙'];

  return (
    <div className={styles.activitiesPageContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.topLayout}>
          <h2 className={styles.h2Title}>내 체험 등록</h2>
          <button className={styles.createButton} type='submit'>
            등록하기
          </button>
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ko'>
          <StyledEngineProvider injectFirst>
            <MyActivitiesCreate
              usage={selectedCategory}
              options={categories}
              setOption={setSelectedCategory}
              register={register}
              errors={errors}
              clearErrors={clearErrors}
              handleSubmit={handleSubmit}
              control={control}
            />
          </StyledEngineProvider>
        </LocalizationProvider>
      </form>
    </div>
  );
}
