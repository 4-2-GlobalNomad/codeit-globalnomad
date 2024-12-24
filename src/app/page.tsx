'use client';

import DropDownA from '@/components/dropdown/DropDownA';
import React from 'react';

export default function Home() {
  const handleSelect = (item: string) => {
    alert(`Selected item: ${item}`);
  };

  return (
    <main>
      <DropDownA options={['수정하기', '삭제하기', 'sadf', 'asdfqr']} onSelect={handleSelect} />
    </main>
  );
}
