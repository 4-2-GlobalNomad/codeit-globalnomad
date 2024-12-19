'use client';

import Search from '@/assets/icons/search.svg';
import VisibilityOff from '@/assets/icons/visibility-off.svg';
import VisibilityOn from '@/assets/icons/visibility-on.svg';
import BasicInput from '@/components/BasicInput';
import React, { HTMLInputTypeAttribute } from 'react';

export default function Home() {
  const [value, setValue] = React.useState('');
  const [type, setType] = React.useState<HTMLInputTypeAttribute>('text');
  return (
    <>
      <div style={{ width: '30rem', margin: '50px auto' }}>
        <BasicInput placeholder='입력' />
      </div>
      <div style={{ width: '30rem', margin: '50px auto' }}>
        <BasicInput
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ paddingRight: '1.2rem' }}
          placeholder='비밀번호를 입력해주세요'
          icon={
            type === 'password' ? (
              <VisibilityOff onClick={() => setType('text')} />
            ) : (
              <VisibilityOn onClick={() => setType('password')} />
            )
          }
          iconPosition='right'
        />
      </div>
      <div style={{ width: '30rem', margin: '50px auto' }}>
        <BasicInput
          style={{ paddingLeft: '1.2rem' }}
          placeholder='내가 원하는 체험은'
          icon={<Search />}
          iconPosition='left'
        />
      </div>
    </>
  );
}
