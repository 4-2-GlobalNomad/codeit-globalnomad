'use client';

import DropDownA from '@/components/dropdown/DropDownA';
import DropDownB from '@/components/dropdown/DropDownB';
import React from 'react';

export default function Home() {
  const handleSelect = (item: string) => {
    alert(`Selected item: ${item}`);
  };

  return (
    <main>
      <DropDownA options={['수정하기', '삭제하기', 'sadf', 'asdfqr']} onSelect={handleSelect} />
      <DropDownB options={['가격이 낮은 순', '가격이 높은 순']} onSelect={handleSelect} />
    </main>
  );
}
