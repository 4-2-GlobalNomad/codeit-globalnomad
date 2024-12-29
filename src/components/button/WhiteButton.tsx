import React from 'react';
import { whiteButton } from './WhiteButton.css';

//props로 스타일 조정할 수 있게 해두었습니다
//기본값으로 넣어두었습니다

interface WhiteButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  borderRadius?: string;
  width?: string;
  height?: string;
}

export const WhiteButton: React.FC<WhiteButtonProps> = ({
  children,
  onClick,
  borderRadius = '8px',
  width = '117px',
  height = '46px',
}) => {
  return (
    <button className={whiteButton} onClick={onClick} style={{ borderRadius, width, height }}>
      {children} {/* 버튼 안에 들어갈 내용 */}
    </button>
  );
};
