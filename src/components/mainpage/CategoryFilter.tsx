import DropDownB from '@/components/dropdown/DropDownB';
import { MouseEvent } from 'react';
import * as styles from './CategoryFilter.css';

const CATEGORY_LIST = ['문화 · 예술', '식음료', '스포츠', '투어', '웰빙'];

const SORT_OPTIONS = ['가격 낮은 순', '가격 높은 순'];

interface CategoryFilterProps {
  currentCategory: string;
  onSelectCategory: (e: MouseEvent<HTMLButtonElement>) => void;
  onSetSort: (sortKey: string) => void;
}

const CategoryFilter = ({ currentCategory, onSelectCategory, onSetSort }: CategoryFilterProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.categoryWrapper}>
        <div className={styles.categoryList}>
          {CATEGORY_LIST.map((category) => (
            <button
              className={`${styles.categoryButton} ${category === currentCategory ? 'active' : ''}`}
              type='button'
              key={category}
              value={category}
              onClick={onSelectCategory}
            >
              {category.trim()}
            </button>
          ))}
        </div>
        <div className={styles.popoverWrapper} />
      </div>

      <div className={styles.sortWrapper}>
        <DropDownB
          options={SORT_OPTIONS}
          placeholder='가격'
          onSelect={(item: string) => {
            const sortKey = item === '가격 낮은 순' ? 'price_asc' : 'price_desc';
            onSetSort(sortKey);
          }}
        />
      </div>
    </div>
  );
};

export default CategoryFilter;
