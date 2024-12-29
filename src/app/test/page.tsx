'use client';

import { NomadButton } from '@/components/button/NomadButton';
import { WhiteButton } from '@/components/button/WhiteButton';
import React from 'react';

export default function Page() {
  const handleClick = () => {
    console.log('NomadButton clicked!');
  };

  const handleWhiteClick = () => {
    console.log('WhiteButton clicked!');
  };

  return (
    <div>
      <NomadButton onClick={handleClick} borderRadius='8px' width='150px' height='60px'>
        Click Me
      </NomadButton>

      <WhiteButton onClick={handleWhiteClick} borderRadius='8px' width='150px' height='60px'>
        Click White
      </WhiteButton>
    </div>
  );
}
