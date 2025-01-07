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
  FieldError,
  FieldErrors,
  FieldValues,
  RegisterOptions,
  SubmitHandler,
  UseFormRegisterReturn,
  useForm,
} from 'react-hook-form';
import * as styles from './MyActivitiesCreate.css';

interface MyActivitiesCreateProps {
  options: string[];
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
  errors: FieldErrors<FieldValues> & {
    availableDateTimeList?: FieldError[];
  };
  clearErrors: (name?: string | string[] | undefined) => void;
  control: ReturnType<typeof useForm>['control'];
}

type ReservationDateTime = {
  date: dayjs.Dayjs | null;
  startTime: dayjs.Dayjs | null;
  endTime: dayjs.Dayjs | null;
};

export default function MyActivitiesCreate({ options, register, errors, control }: MyActivitiesCreateProps) {
  const dropDownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useDetectClose(dropDownRef, false) as [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
  ];

  const toggleDropdown = () => setIsDropdownOpen((prev: boolean) => !prev);

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
        defaultValue={null}
        rules={{ required: true }}
        render={({ field }) => (
          <div>
            <div className={`${styles.selectBoxContainer} `} ref={dropDownRef}>
              <div
                onClick={toggleDropdown}
                className={`${errors.category ? styles.errorStyle : styles.defaultInputStyle} ${styles.selectedOptionStyle} `}
              >
                <input placeholder='카테고리' className={styles.categoryInput} value={field.value ?? ''} readOnly />
                <ArrowDown className={`${styles.arrow} ${isDropdownOpen ? styles.rotated : ''}`} />
              </div>
              {errors.category && <p className={styles.errorMessageStyle}>카테고리는 필수 선택 사항입니다.</p>}
              {isDropdownOpen && (
                <ul className={styles.selectBoxList}>
                  {options.map((option, index) => (
                    <li
                      key={index}
                      tabIndex={0} // 포커스 가능하도록 설정
                      aria-selected={field.value === option}
                      onClick={() => {
                        field.onChange(option); // react-hook-form에 값 전달
                        toggleDropdown(); // 드롭다운 닫기
                      }}
                      className={styles.selectBoxItem}
                      role='option'
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
      <div>
        <textarea
          className={`${styles.descriptionInput}` + (errors.description ? ` ${styles.errorStyle}` : '')}
          placeholder='설명'
          {...register('description', { required: true })}
        />
        {errors.description && <p className={styles.errorMessageStyle}>설명은 필수 입력 사항입니다.</p>}
      </div>
      <div className={styles.inputContainer}>
        <h2 className={styles.inputTitle}>가격</h2>
        <div>
          <Input
            placeholder='가격'
            {...register('price', { required: '가격은 필수 입력 사항입니다.' })}
            error={Boolean(errors.price)}
            errorMessage={errors.price?.message as string | undefined}
          />
        </div>
      </div>
      <div className={styles.inputContainer}>
        <h2 className={styles.inputTitle}>주소</h2>
        <div>
          <Input
            placeholder='주소'
            {...register('address', { required: '주소는 필수 입력 사항입니다.' })}
            error={Boolean(errors.address)}
            errorMessage={errors.address?.message as string | undefined}
          />
        </div>
      </div>
      <h2 className={styles.inputTitle}>예약 가능한 시간대</h2>

      <Controller
        name='availableDateTimeList'
        control={control}
        defaultValue={[{ date: null, startTime: null, endTime: null }]}
        rules={{
          validate: (value) => {
            console.log('validate 재 실행');
            const errors: (string | null)[] = [];
            let isError = false;

            for (let index = 0; index < value.length; index++) {
              const item = value[index];
              let error = null;
              if (!item.date) {
                error = `날짜를 입력해주세요.`;
              } else if (!item.startTime) {
                error = `시작 시간을 입력해주세요.`;
              } else if (!item.endTime) {
                error = `종료 시간을 입력해주세요.`;
              } else if (item.startTime && item.endTime && item.startTime >= item.endTime) {
                error = `종료 시간은 시작 시간 이후여야 합니다.`;
              }

              if (error !== null) isError = true;

              errors.push(error);
            }

            return !isError ? true : JSON.stringify(errors);
          },
        }}
        render={({ field, fieldState: { error } }) => {
          const errors = error && error.message ? JSON.parse(error.message) : null;
          console.log(errors);
          return (
            <div>
              <div className={styles.datePickerLabelContainer}>
                <div className={`${styles.datePickerLabel}`}>날짜</div>
                <div className={`${styles.datePickerLabel}`}>시작 시간</div>
                <div className={styles.datePickerLabel}>종료 시간</div>
              </div>
              {field.value.map((availableDateTime: ReservationDateTime, index: number) => (
                <div key={index}>
                  {index === 1 && <div className={styles.horizon}></div>}
                  <div className={styles.dateTimePickerContainer}>
                    <DatePicker
                      className={styles.datePickerContainer}
                      value={availableDateTime.date}
                      onChange={(v) => {
                        field.value[index].date = v;
                        field.onChange([...field.value]);
                      }}
                      slotProps={{ textField: { placeholder: 'YYYY/MM/DD' } }}
                    />
                    <div className={styles.timePickerContainer}>
                      <div>
                        <TimePicker
                          value={availableDateTime.startTime}
                          onChange={(v) => {
                            field.value[index].startTime = v;
                            field.onChange([...field.value]);
                          }}
                        />
                      </div>
                      <div>~</div>
                      <TimePicker
                        value={availableDateTime.endTime}
                        onChange={(v) => {
                          field.value[index].endTime = v;
                          field.onChange([...field.value]);
                        }}
                      />
                    </div>

                    {index === 0 ? (
                      <div
                        className={styles.TimeButton}
                        onClick={() => {
                          console.log('추가 버튼');
                          field.onChange([{ date: null, startTime: null, endTime: null }, ...field.value]);
                        }}
                      >
                        <AddTimeBtn />
                      </div>
                    ) : (
                      <div
                        className={styles.TimeButton}
                        onClick={() => {
                          field.onChange(field.value.filter((v: ReservationDateTime, i: number) => i !== index));
                        }}
                      >
                        <MinusTimeBtn />
                      </div>
                    )}
                  </div>
                  {errors !== null && errors[index] !== null && (
                    <p className={styles.errorMessageStyle}>{errors[index]}</p>
                  )}
                </div>
              ))}
            </div>
          );
        }}
      />

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
