import ArrowDown from '@/assets/icons/arrow-down.svg';
import AddTimeBtn from '@/assets/icons/btn-add-time.svg';
import MinusTimeBtn from '@/assets/icons/btn-minus-time.svg';
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

  // 예약 가능한 시간대 추가
  const [availableTime, setAvailableTime] = useState([0]);

  const handleAddTime = () => {
    setAvailableTime([...availableTime, availableTime.length]);
  };

  const handleDeleteTime = (indexToDelete: number) => {
    setAvailableTime((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    <section className={styles.inputSectionContainer}>
      <Input placeholder='제목' />
      <div className={styles.selectBoxContainer} ref={dropDownRef}>
        <div
          onClick={toggleDropdown}
          className={`${styles.categoryLayout} ${selectedOption !== '카테고리' ? styles.selectedOptionStyle : ''}`}
        >
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
        <h2 className={styles.inputTitle}>가격</h2>
        <Input placeholder='가격' />
      </div>
      <div className={styles.inputContainer}>
        <h2 className={styles.inputTitle}>주소</h2>
        <Input placeholder='주소를 입력해주세요' />
      </div>
      <h2 className={styles.inputTitle}>예약 가능한 시간대</h2>
      <div>
        <div className={styles.datePickerLabelContainer}>
          <div className={`${styles.datePickerLabel}`}>날짜</div>
          <div className={`${styles.datePickerLabel}`}>시작 시간</div>
          <div className={styles.datePickerLabel}>종료 시간</div>
        </div>

        {availableTime.map((_, index) => (
          <div key={index}>
            {index === 1 && <div className={styles.horizon}></div>}
            <div className={styles.dateTimePickerContainer}>
              <DatePicker className={styles.datePickerContainer} />
              <div className={styles.timePickerContainer}>
                <div>
                  <TimePicker defaultValue={dayjs('2025-01-04T09:00')} />
                </div>
                <div>~</div>
                <TimePicker defaultValue={dayjs('2025-01-04T09:00')} />
              </div>
              {index === 0 ? (
                <div className={styles.TimeButton} onClick={handleAddTime}>
                  <AddTimeBtn />
                </div>
              ) : (
                <div className={styles.TimeButton} onClick={() => handleDeleteTime(index)}>
                  <MinusTimeBtn />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <h2 className={styles.inputTitle}>배너 이미지</h2>
      <label htmlFor='file-upload' className={styles.fileUploadContainer}>
        <input className={styles.fileUploadInput} id='file-upload' type='file' />
        <div className={styles.fileUploadtext}>
          <IconPlus />
          <span>이미지 등록</span>
        </div>
      </label>
      <h2 className={styles.inputTitle}>소개 이미지</h2>
      <div className={styles.subImageLayout}>
        <div className={styles.subImageContainer}>
          <label htmlFor='file-upload' className={styles.fileUploadContainer}>
            <input className={styles.fileUploadInput} id='file-upload' type='file' />
            <div className={styles.fileUploadtext}>
              <IconPlus />
              <span>이미지 등록</span>
            </div>
          </label>
        </div>
        <p className={styles.descPhrase}>*이미지는 최대 4개까지 등록 가능합니다.</p>
      </div>
    </section>
  );
}