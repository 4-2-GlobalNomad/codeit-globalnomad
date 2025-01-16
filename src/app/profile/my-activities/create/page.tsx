'use client';

import Dialog from '@/components/modal/Dialog';
import Modal from '@/components/modal/Modal';
import MyActivitiesCreate from '@/components/profile/my-activities-create/MyActivitiesCreate';
import { useMyActivitiesCreate } from '@/hooks/use-my-activities-create';
import { uploadImage } from '@/hooks/use-upload-image';
import { MyActivitiesCreateData } from '@/types/my-activities-create-data';
import { StyledEngineProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import * as styles from './page.css';

export default function MyActivitiesCreatePage() {
  const mutation = useMyActivitiesCreate();
  const router = useRouter();
  const queryClient = useQueryClient();
  const categories = ['문화 · 예술', '식음료', '스포츠', '투어', '관광', '웰빙'];
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
    control,
  } = useForm();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const handleCreateModalState = () => {
    setShowCreateModal(!showCreateModal);
    router.push('/profile/my-activities');
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const schedules: Array<{
      date: string;
      startTime: string;
      endTime: string;
    }> = [];
    data.availableDateTimeList.forEach((item: { date: dayjs.Dayjs; startTime: dayjs.Dayjs; endTime: dayjs.Dayjs }) => {
      if (item.date && item.startTime && item.endTime) {
        schedules.push({
          date: item.date.format('YYYY-MM-DD'),
          startTime: item.startTime.format('HH:mm'),
          endTime: item.endTime.format('HH:mm'),
        });
      }
    });

    const bannerImageUrl = await uploadImage(data.bannerImage);
    if (!bannerImageUrl) {
      alert('배너 이미지 업로드에 실패했습니다.');
      return;
    }

    // console.log(bannerImageUrl);

    const subImageUrls: string[] = [];
    if (data.subfileImage) {
      for await (const image of data.subfileImage) {
        const subImageUrl = await uploadImage(image);
        if (!subImageUrl) {
          alert('소개 이미지 업로드에 실패했습니다.');
          return;
        }
        subImageUrls.push(subImageUrl);
      }
    }

    const myActivitiesCreateData: MyActivitiesCreateData = {
      title: data.title,
      category: data.category,
      description: data.description,
      address: data.address,
      price: Number(data.price),
      schedules: schedules,
      bannerImageUrl: bannerImageUrl,
      subImageUrls: subImageUrls,
    };

    // console.log(myActivitiesCreateData);

    mutation.mutate(myActivitiesCreateData, {
      onSuccess: () => {
        setShowCreateModal(true);
        queryClient.invalidateQueries({ queryKey: ['my-activities'] });
      },
    });
  };
  return (
    <>
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
                setValue={setValue}
              />
            </StyledEngineProvider>
          </LocalizationProvider>
        </form>
      </div>

      {showCreateModal &&
        createPortal(
          <Modal
            content={<Dialog message='체험 등록이 완료되었습니다' handleModalState={handleCreateModalState} />}
            handleModalState={handleCreateModalState}
          />,
          document.body,
        )}
    </>
  );
}
