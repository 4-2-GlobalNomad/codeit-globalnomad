import ArrowDown from '@/assets/icons/arrow-down.svg';
import TimeAddButton from '@/assets/icons/btn-add.svg';
import CheckMark from '@/assets/icons/check-mark.svg';
import IconPlus from '@/assets/icons/plus.svg';
import Input from '@/components/Input';
import useDetectClose from '@/hooks/use-detect-close';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import React, { useRef, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
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
    <section className={styles.inputSectionContainer}>
      <Input placeholder='제목' />
      <div className={styles.selectBoxContainer} ref={dropDownRef}>
        <div onClick={toggleDropdown} className={styles.categoryLayout}>
          <span>{selectedOption}</span>
          <ArrowDown className={`${styles.arrow} ${isDropdownOpen ? styles.rotated : ''}`} />
        </div>
        {isDropdownOpen && (
          <ul className={styles.selectBoxList}>
            {options.map((option, index) => (
              <li key={index} onClick={() => handleSelect(option)} className={styles.selectBoxItem}>
                <CheckMark className={styles.checkMark} />
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      <textarea className={styles.descriptionInput} placeholder='설명' />
      <div className={styles.inputContainer}>
        <label className={styles.labelTitle}>가격</label>
        <Input placeholder='가격' />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.labelTitle}>주소</label>
        <Input placeholder='주소를 입력해주세요' />
      </div>
      <label className={styles.labelTitle}>예약 가능한 시간대</label>
      <div>
        <div className={styles.datePickerLabelContainer}>
          <div className={`${styles.datePickerLabel} ${styles.dateLabel}`}>날짜</div>
          <div className={`${styles.datePickerLabel}`}>시작 시간</div>
          <div className={styles.datePickerLabel}>종료 시간</div>
        </div>
        <div className={styles.dateTimePickerContainer}>
          <DatePicker className={styles.datePickerContainer} /> {/* 날짜 선택 */}
          <div className={styles.timePickerContainer}>
            <div className={styles.startTimeContainer}>
              <TimePicker defaultValue={dayjs('2025-01-04T09:00')} />
            </div>
            <div>~</div>
            <TimePicker defaultValue={dayjs('2025-01-04T09:00')} />
          </div>
          <div className={styles.TimeAddButton}>
            <TimeAddButton />
          </div>
        </div>
      </div>
      <label className={styles.labelTitle}>배너 이미지</label>
      <div className={styles.fileUploadContainer}>
        <input className={styles.fileUploadInput} id='file-upload' type='file' />
        <div className={styles.fileUploadtext}>
          <IconPlus />
          <span>이미지 등록</span>
        </div>
      </div>
      <label className={styles.labelTitle}>소개 이미지</label>
      <div className={styles.subImageLayout}>
        <div className={styles.subImageContainer}>
          <div className={styles.fileUploadContainer}>
            <input className={styles.fileUploadInput} id='file-upload' type='file' />
            <div className={styles.fileUploadtext}>
              <IconPlus />
              <span>이미지 등록</span>
            </div>
          </div>
        </div>
        <p className={styles.descPhrase}>*이미지는 최대 4개까지 등록 가능합니다.</p>
      </div>
    </section>
  );
}
