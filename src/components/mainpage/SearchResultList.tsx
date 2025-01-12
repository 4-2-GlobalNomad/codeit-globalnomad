'use client';

import getSearchResult from '@/apis/get-search-result';
import ActivityCard from '@/components/mainpage/ActivityCard';
import Pagination from '@/components/pagination/Pagination';
import ActivityCardSkeleton from '@/components/skeletonui/mainpage/ActivityCardSkeleton';
import { ActivityInfo, ActivityResponse } from '@/types/mainpage';
import { useEffect, useState } from 'react';
import * as styles from './SearchResultList.css';

interface SearchResultListProps {
  keyword: string;
}

const SearchResultList: React.FC<SearchResultListProps> = ({ keyword }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchResult, setSearchResult] = useState<ActivityResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const itemsPerPage = 16;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await getSearchResult(keyword, currentPage, itemsPerPage);
        setSearchResult(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [keyword, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const newUrl = `/?keyword=${encodeURIComponent(keyword)}&page=${page}`;
    window.history.pushState({}, '', newUrl);
  };

  if (isError) {
    return <div>검색 결과를 가져오는 중 오류가 발생했습니다.</div>;
  }

  if (isLoading) {
    return (
      <div>
        {Array.from({ length: itemsPerPage }, (_, index) => (
          <ActivityCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  const { activities, totalCount } = searchResult || { activities: [], totalCount: 0 };

  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.boldGreenText}>{keyword}</span> 으로 검색한 결과입니다.
        </h2>
        <p className={styles.count}>총 {totalCount}개의 결과</p>
      </div>

      <div className={styles.grid}>
        {activities.map((activity: ActivityInfo) => (
          <ActivityCard key={activity.id} cardData={activity} />
        ))}
      </div>

      {totalCount === 0 && <div className={styles.emptyResult}>검색 결과가 없습니다.</div>}

      {totalCount > 0 && (
        <Pagination
          currentPage={currentPage}
          totalCount={totalCount}
          offsetLimit={itemsPerPage}
          setPageNum={handlePageChange}
          currentPageGroup={Math.floor((currentPage - 1) / 5) + 1}
        />
      )}
    </div>
  );
};

export default SearchResultList;
