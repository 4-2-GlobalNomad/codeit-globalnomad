'use client';

import ActivityCardList from '@/components/mainpage/ActivityCardList';
import ActivitySearch from '@/components/mainpage/ActivitySearch';
import MainBanner from '@/components/mainpage/MainBanner';
import PopularActivityList from '@/components/mainpage/PopularActivityList';
import SearchResultList from '@/components/mainpage/SearchResultList';
import { useEffect, useState } from 'react';
import { wrapper } from './page.css';

const MainPage = () => {
  const [keyword, setKeyword] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keywordFromURL = params.get('keyword') || '';
    setKeyword(keywordFromURL);
  }, []);

  return (
    <div className={wrapper}>
      <MainBanner />
      <ActivitySearch setKeyword={setKeyword} />
      {keyword.trim() ? (
        <>
          <SearchResultList keyword={keyword} />
        </>
      ) : (
        <>
          <PopularActivityList />
          <ActivityCardList />
        </>
      )}
    </div>
  );
};

export default MainPage;
