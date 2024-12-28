import ArrowLeft from '@/assets/icons/Arrow-Left.svg';
import ArrowRight from '@/assets/icons/Arrow-Right.svg';
import React from 'react';
import { leftArrow, pageButton, paginationContainer, prevNextButton, rightArrow } from './Pagination.css';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className={paginationContainer}>
      <button className={prevNextButton} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <ArrowLeft className={leftArrow} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`${pageButton} ${currentPage === page ? 'selected' : ''}`}
          onClick={() => onPageChange(page)}
          style={{ fontWeight: currentPage === page ? 'bold' : 'normal' }}
        >
          {page}
        </button>
      ))}

      <button
        className={prevNextButton}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ArrowRight className={rightArrow} />
      </button>
    </div>
  );
};

export default Pagination;
