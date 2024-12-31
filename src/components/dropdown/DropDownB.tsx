'use client';

import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import ArrowIcon from '../../assets/icons/arrow.svg';
import * as styles from './DropDownB.css';

interface DropDownBProps {
  options: string[];
  placeholder?: string;
  onSelect: (item: string) => void;
}

const DropDownB: React.FC<DropDownBProps> = ({ options, placeholder = '가격', onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
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

  const handleSelect = (item: string) => {
    setSelected(item);
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownContainerB}>
      <button className={styles.dropdownButtonB} onClick={toggleDropdown} ref={buttonRef}>
        <span>{selected || placeholder}</span>
        <ArrowIcon className={`${styles.iconB} ${isOpen ? styles.open : ''}`} />
      </button>

      {isOpen &&
        ReactDOM.createPortal(
          <div style={dropdownStyle} className={styles.portalContainerB}>
            <ul className={styles.dropdownListB}>
              {options.map((option, index) => (
                <li
                  key={index}
                  className={`${styles.itemB} ${styles.listItemWithDividerB}`}
                  onClick={() => handleSelect(option)}
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

export default DropDownB;
