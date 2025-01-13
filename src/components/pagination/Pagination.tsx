import ArrowLeft from '@/assets/icons/Arrow-Left.svg';
import ArrowRight from '@/assets/icons/Arrow-Right.svg';
import React from 'react';
import { leftArrow, pageButton, paginationContainer, prevNextButton, rightArrow } from './Pagination.css';

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  offsetLimit: number;
  setPageNum: (page: number) => void;
  currentPageGroup: number;
}

const Pagination = ({ currentPage, totalCount, offsetLimit, setPageNum, currentPageGroup }: PaginationProps) => {
  const totalPages = Math.ceil(totalCount / offsetLimit);
  const getPageGroups = () => {
    const maxVisibleGroups = 5;
    const startGroup = Math.max(currentPageGroup - Math.floor(maxVisibleGroups / 2), 1);
    return { startGroup };
  };

  const { startGroup } = getPageGroups();

  const getVisiblePageNumbers = () => {
    const pageNumbers: number[] = [];
    const startPage = (startGroup - 1) * 5 + 1;
    const endPage = Math.min(startPage + 4, totalPages);

    for (let page = startPage; page <= endPage; page++) {
      pageNumbers.push(page);
    }

    return pageNumbers;
  };

  const visiblePages = getVisiblePageNumbers();

  return (
    <div className={paginationContainer}>
      <button className={prevNextButton} onClick={() => setPageNum(currentPage - 1)} disabled={currentPage === 1}>
        <ArrowLeft className={leftArrow} />
      </button>
      {visiblePages.map((page) => (
        <button
          key={page}
          className={`${pageButton} ${currentPage === page ? 'selected' : ''}`}
          onClick={() => setPageNum(page)}
          style={{ fontWeight: currentPage === page ? 'bold' : 'normal' }}
        >
          {page}
        </button>
      ))}
      <button
        className={prevNextButton}
        onClick={() => setPageNum(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ArrowRight className={rightArrow} />
      </button>
    </div>
  );
};

export default Pagination;
