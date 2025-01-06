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
import {
  Controller,
  FieldErrors,
  FieldValues,
  RegisterOptions,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormRegisterReturn,
  useForm,
} from 'react-hook-form';
import * as styles from './MyActivitiesCreate.css';

interface MyActivitiesCreateProps {
  usage: null | string;
  options: string[];
  setOption: React.Dispatch<React.SetStateAction<string | null>>;
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
  errors: FieldErrors<FieldValues>;
  handleSubmit: (handler: SubmitHandler<FieldValues>) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  clearErrors: (name?: string | string[] | undefined) => void;
  control: ReturnType<typeof useForm>['control'];
}

type ReservationDateTime = {
  date: dayjs.Dayjs | null;
  startTime: dayjs.Dayjs | null;
  endTime: dayjs.Dayjs | null;
};

export default function MyActivitiesCreate({
  usage,
  options,
  setOption,
  register,
  errors,
  control,
  handleSubmit,
  clearErrors,
}: MyActivitiesCreateProps) {
  const dropDownRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState(usage);
  const [isDropdownOpen, setIsDropdownOpen] = useDetectClose(dropDownRef, false) as [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
  ];

  const toggleDropdown = () => setIsDropdownOpen((prev: boolean) => !prev);

  // 예약 가능한 시간대 추가
  const [availableDateTimeList, setAvailableTime] = useState<ReservationDateTime[]>([
    { date: null, startTime: null, endTime: null },
  ]);

  const handleAddTime = () => {
    setAvailableTime([{ date: null, startTime: null, endTime: null }, ...availableDateTimeList]);
  };

  const handleDeleteTime = (indexToDelete: number) => {
    setAvailableTime((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    <section className={styles.inputSectionContainer}>
      <div>
        <Input
          placeholder='제목'
          {...register('title', { required: '제목은 필수 입력 사항입니다.' })}
          error={Boolean(errors.title)} // errors 객체에서 title 필드의 오류 여부 확인
          errorMessage={errors.title?.message as string | undefined}
        />
      </div>

      <Controller
        name='category'
        control={control}
        defaultValue={selectedOption}
        rules={{ required: '카테고리는 필수 선택 사항입니다.' }}
        render={({ field }) => (
          <div>
            <div className={`${styles.selectBoxContainer} `} ref={dropDownRef}>
              <div
                onClick={toggleDropdown}
                className={`${errors.category ? styles.errorStyle : styles.defaultStyle} ${styles.selectedOptionStyle} `}
              >
                <input
                  placeholder='카테고리'
                  className={styles.categoryInput}
                  value={selectedOption ?? ''}
                  readOnly
                  onChange={() => setSelectedOption(selectedOption)}
                />
                <ArrowDown className={`${styles.arrow} ${isDropdownOpen ? styles.rotated : ''}`} />
              </div>
              {errors.category && <p className={styles.errorMessageStyle}>카테고리는 필수 선택 사항입니다.</p>}
              {isDropdownOpen && (
                <ul className={styles.selectBoxList}>
                  {options.map((option, index) => (
                    <li
                      key={index}
                      tabIndex={0} // 포커스 가능하도록 설정
                      aria-selected={selectedOption === option}
                      onClick={() => {
                        setOption(option); // UI에 선택된 옵션 반영
                        field.onChange(option); // react-hook-form에 값 전달
                        setSelectedOption(option);
                        toggleDropdown(); // 드롭다운 닫기
                      }}
                      className={styles.selectBoxItem}
                    >
                      <CheckMark className={styles.checkMark} />
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      />

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

        {availableDateTimeList.map((availableDateTime, index) => (
          <div key={index}>
            {index === 1 && <div className={styles.horizon}></div>}
            <div className={styles.dateTimePickerContainer}>
              <DatePicker
                className={styles.datePickerContainer}
                value={availableDateTime.date}
                onChange={(v) => {
                  if (v !== null) {
                    availableDateTime.date = v;
                  }
                }}
                slotProps={{ textField: { placeholder: 'YYYY/MM/DD' } }}
              />
              <div className={styles.timePickerContainer}>
                <div>
                  <TimePicker
                    value={availableDateTime.startTime}
                    onChange={(v) => {
                      if (v !== null) {
                        availableDateTime.startTime = v;
                      }
                    }}
                  />
                </div>
                <div>~</div>
                <TimePicker
                  value={availableDateTime.endTime}
                  onChange={(v) => {
                    if (v !== null) {
                      availableDateTime.endTime = v;
                    }
                  }}
                />
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
