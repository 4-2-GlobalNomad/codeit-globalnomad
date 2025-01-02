import ArrowDown from '@/assets/icons/arrow-down.svg';
import Input from '@/components/Input';
import useDetectClose from '@/hooks/use-detect-close';
import React, { useRef, useState } from 'react';
import * as styles from './MyActivitiesCreate.css';

interface Props {
  usage: string;
  options: string[];
  setOption: React.Dispatch<React.SetStateAction<string>>;
}

export default function MyActivitiesCreate({ usage, options, setOption }: Props) {
  const dropDownRef = useRef(null);

  const [selectedOption, setSelectedOption] = useState(usage);
  const [isDropdownOpen, setIsDropdownOpen] = useDetectClose(dropDownRef, false) as [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
  ];

  const toggleDropdown = () => setIsDropdownOpen((prev: boolean) => !prev);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <section>
      <Input placeholder='제목' />
      <div className={styles.SelectBoxContainer} ref={dropDownRef}>
        <div onClick={toggleDropdown}>
          <span>{selectedOption}</span>
          <ArrowDown className={`${styles.arrow} ${isDropdownOpen ? styles.rotated : ''}`} />
        </div>
        {isDropdownOpen && (
          <ul>
            {options.map((option, index) => (
              <li key={index} onClick={() => handleSelect(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
