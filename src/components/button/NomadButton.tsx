import React from 'react';
import { nomadButton } from './NomadButton.css';

// props로 스타일 조정할 수 있게 해두었습니다
//  <div>
//     <NomadButton onClick={handleClick} borderRadius='8px' width='150px' height='60px'>
//       Click Me
//     </NomadButton>
//   </div>
// 기본값으로 설정해두었습니다

interface NomadButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  borderRadius?: string;
  width?: string;
  height?: string;
}

export const NomadButton: React.FC<NomadButtonProps> = ({
  children,
  onClick,
  borderRadius = '4px',
  width = '132px',
  height = '56px',
}) => {
  return (
    <button className={nomadButton} onClick={onClick} style={{ borderRadius, width, height }}>
      {children} {/* 버튼 안에 들어갈 내용 */}
    </button>
  );
};
