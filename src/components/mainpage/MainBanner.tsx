import useGetActivities from '@/apis/get-activities';
import Image from 'next/image';
import React from 'react';
import {
  bannerWrapper,
  contentWrapper,
  errorWrapper,
  loadingWrapper,
  overlay,
  subtitle,
  textWrapper,
  title,
} from './MainBanner.css';

const MainBanner = () => {
  const calendarNum = new Date().getMonth() + 1;
  const { data, isLoading, isError } = useGetActivities({
    method: 'cursor',
    cursorId: null,
    size: 1,
    sort: 'most_reviewed',
  });

  return (
    <div className={bannerWrapper}>
      {isLoading ? (
        <div className={loadingWrapper}>
          <Image src='/icons/spinner.svg' width={150} height={150} alt='loading icon' />
        </div>
      ) : isError ? (
        <div className={errorWrapper}>
          데이터를 불러오는데 실패하였습니다.
          <br />
          다시 시도해주세요.
        </div>
      ) : (
        <Image
          src={data?.activities[0].bannerImageUrl || '/icons/default-banner.png'}
          alt={data?.activities[0].title || '배너 이미지'}
          layout='fill'
          objectFit='cover'
          className='z-0'
        />
      )}
      <div className={overlay} />
      <div className={contentWrapper}>
        <div className={textWrapper}>
          <h1 className={title}>{isLoading ? '로딩 중입니다..' : data?.activities[0].title || '체험 제목'}</h1>
          <p className={subtitle}>{`${calendarNum}월의 인기 체험🔥`}</p>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
