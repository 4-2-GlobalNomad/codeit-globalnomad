'use client';

import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import MeatballIcon from '../../assets/icons/meatball.svg';
import * as styles from './DropDownA.css';

interface DropDownAProps {
  options: string[];
  onSelect: (item: string) => void;
}

function DropDownA({ options, onSelect }: DropDownAProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState({});
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    if (!isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownStyle({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        position: 'absolute',
      });
    }
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.dropdownContainerA}>
      <button onClick={toggleDropdown} ref={buttonRef}>
        <MeatballIcon className={styles.iconA} />
      </button>
      {isOpen &&
        ReactDOM.createPortal(
          <div style={dropdownStyle} className={styles.portalContainerA}>
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
}

export default DropDownA;
