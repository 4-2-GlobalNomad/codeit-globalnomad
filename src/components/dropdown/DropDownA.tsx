'use client';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as styles from './DropDownA.css';

interface DropDownAProps {
  options: string[];
  onSelect: (item: string) => void;
}

const DropDownA: React.FC<DropDownAProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.dropdownContainer}>
      <button className={styles.dropdownButton} onClick={toggleDropdown}>
        ...
      </button>
      {isOpen &&
        ReactDOM.createPortal(
          <div className={styles.portalContainer}>
            <ul className={styles.dropdownList}>
              {options.map((option, index) => (
                <li
                  key={index}
                  className={styles.item}
                  onClick={() => {
                    onSelect(option), setIsOpen(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>,
          document.getElementById('portal-root') as HTMLElement,
        )}
    </div>
  );
};

export default DropDownA;
