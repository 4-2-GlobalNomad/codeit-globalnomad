'use client';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MeatballIcon from '../../assets/icons/meatball.svg';
import * as styles from './DropDownA.css';

interface DropDownAProps {
  options: string[];
  onSelect: (item: string) => void;
}

const DropDownA: React.FC<DropDownAProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.dropdownContainerA}>
      <button onClick={toggleDropdown}>
        <MeatballIcon className={styles.iconA} />
      </button>
      {isOpen &&
        ReactDOM.createPortal(
          <div className={styles.portalContainerA}>
            <ul className={styles.dropdownListA}>
              {options.map((option, index) => (
                <li
                  key={index}
                  className={`${styles.itemA} ${styles.listItemWithDividerA}`}
                  onClick={() => {
                    onSelect(option);
                    setIsOpen(false);
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
