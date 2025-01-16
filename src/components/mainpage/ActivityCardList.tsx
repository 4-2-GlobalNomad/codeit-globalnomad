import getCurrentPageActivity from '@/apis/get-current-page-activity';
import { queryKeys } from '@/apis/querykeys';
import ActivityCard from '@/components/mainpage/ActivityCard';
import Pagination from '@/components/pagination/Pagination';
import ActivityCardSkeleton from '@/components/skeletonui/mainpage/ActivityCardSkeleton';
import { ActivityResponse } from '@/types/mainpage';
import { useQuery } from '@tanstack/react-query';
import { MouseEvent, useEffect, useState } from 'react';
import * as styles from './ActivityCardList.css';
import CategoryFilter from './CategoryFilter';

const usePageActivity = (pageNum: number, size: number, category: string, sort: string) => {
  return useQuery<ActivityResponse, Error>({
    queryKey: queryKeys.currentPageActivity(pageNum, size, category, sort),
    queryFn: () => getCurrentPageActivity(pageNum, size, category, sort),
    staleTime: 5 * 60 * 1000,
    placeholderData: { activities: [], totalCount: 0 },
  });
};

const ActivityCardList = () => {
  const [currentPageNum, setCurrentPageNum] = useState(0);
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentSort, setCurrentSort] = useState('');
  const offset = 8;

  const {
    data: allActivityList,
    isFetching,
    isError,
    error,
  } = usePageActivity(currentPageNum, offset, currentCategory, currentSort);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const categoryParam = queryParams.get('category');
    const sortParam = queryParams.get('sort');
    const pageParam = queryParams.get('page');

    if (categoryParam) {
      setCurrentCategory(categoryParam);
    }
    if (sortParam) {
      setCurrentSort(sortParam);
    }
    if (pageParam) {
      setCurrentPageNum(Number(pageParam) - 1);
    }
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams();
    if (currentCategory) {
      queryParams.set('category', currentCategory);
    }
    if (currentSort) {
      queryParams.set('sort', currentSort);
    }
    queryParams.set('page', String(currentPageNum + 1));
    window.history.pushState({}, '', '?' + queryParams.toString());
  }, [currentCategory, currentSort, currentPageNum]);

  const handlePageChange = (page: number) => setCurrentPageNum(page);
  const handleCategoryClick = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    setCurrentCategory(currentCategory === button.value ? '' : button.value);
    setCurrentPageNum(0);
  };

  const handleSortClick = (sortKey: string) => {
    setCurrentSort(sortKey);
    setCurrentPageNum(0);
  };

  if (isError) {
    return <div>{(error as Error)?.message || '데이터를 가져오는 데 문제가 발생했습니다.'}</div>;
  }

  const activities = allActivityList?.activities || [];
  const totalCount = allActivityList?.totalCount || 0;

  return (
    <>
      <CategoryFilter
        currentCategory={currentCategory}
        onSelectCategory={handleCategoryClick}
        onSetSort={handleSortClick}
      />
      <h2 className={styles.container}>{currentCategory || '🥾 모든 체험'}</h2>
      <div className={styles.gridContainer}>
        {isFetching
          ? Array.from({ length: offset }, (_, index) => <ActivityCardSkeleton key={index} />)
          : activities.map((activity) => <ActivityCard key={activity.id} cardData={activity} />)}
        {totalCount === 0 && !isFetching && <div className={styles.noActivities}>신청할 수 있는 체험이 없습니다.</div>}
      </div>
      {totalCount !== 0 && (
        <Pagination
          currentPage={currentPageNum}
          totalCount={totalCount}
          offsetLimit={offset}
          setPageNum={handlePageChange}
          currentPageGroup={0}
        />
      )}
    </>
  );
};

export default ActivityCardList;
