'use client';

import MyActivitiesCreate from '@/components/profile/my-activities-create/MyActivitiesCreate';
import { StyledEngineProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/ko';
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

  const categories = ['문화 · 예술', '식음료', '스포츠', '투어', '관광', '웰빙'];

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (!data.title) {
      setError('title', { type: 'manual', message: '제목은 필수 입력 사항입니다.' });
    }

    if (!data.category) {
      setError('category', { type: 'manual', message: '카테고리는 필수 선택 사항입니다.' });
    }

    if (!data.description) {
      setError('description', { type: 'manual', message: '내용은 필수 입력 사항입니다.' });
    }

    if (!data.price) {
      setError('price', { type: 'manual', message: '가격은 필수 입력 사항입니다.' });
    }

    if (!data.address) {
      setError('address', { type: 'manual', message: '주소는 필수 입력 사항입니다.' });
    }

    const newErrors: Array<{ index: number; message: string }> = [];

    if (!Array.isArray(data.availableDateTimeList) || data.availableDateTimeList.length === 0) {
      newErrors.push({ index: -1, message: '예약 가능한 시간은 최소 1개 이상 필요합니다.' });
    } else {
      data.availableDateTimeList.forEach((item, index) => {
        if (!item.date || !item.startTime || !item.endTime) {
          newErrors.push({ index, message: '모든 시간대 항목을 완전히 입력해주세요.' });
        }
      });

      if (newErrors.length > 0 || Object.keys(errors).length > 0) {
        return; // 에러가 있으면 중단
      }

      if (
        data.title &&
        data.category &&
        data.description &&
        data.price &&
        data.address &&
        Array.isArray(data.availableDateTimeList) &&
        data.availableDateTimeList.length > 0 &&
        data.availableDateTimeList.every((item) => item.date && item.startTime && item.endTime)
      ) {
        clearErrors(); // 모든 에러 제거
      }
    }
  };
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
              options={categories}
              register={register}
              errors={errors}
              clearErrors={clearErrors}
              control={control}
            />
          </StyledEngineProvider>
        </LocalizationProvider>
      </form>
    </div>
  );
}
