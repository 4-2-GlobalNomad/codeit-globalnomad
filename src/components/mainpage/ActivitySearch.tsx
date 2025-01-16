'use client';

import Search from '@/assets/icons/search.svg';
import { FormEvent, useState } from 'react';
import Input from '../Input';
import * as styles from './ActivitySearch.css';

interface ActivitySearchProps {
  setKeyword: (keyword: string) => void;
}

const ActivitySearch: React.FC<ActivitySearchProps> = ({ setKeyword }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setKeyword(searchValue);
    const newUrl = `/?keyword=${encodeURIComponent(searchValue)}`;
    window.history.pushState({}, '', newUrl);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>무엇을 체험하고 싶으신가요?</label>
        <div className={styles.inputContainer}>
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            style={{ paddingLeft: '0.8rem' }}
            placeholder='내가 원하는 체험은'
            icon={<Search />}
            iconPosition='left'
          />
          <button className={styles.button} type='submit'>
            검색하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default ActivitySearch;
