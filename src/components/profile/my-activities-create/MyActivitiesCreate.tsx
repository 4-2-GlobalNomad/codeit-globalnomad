import ArrowDown from '@/assets/icons/arrow-down.svg';
import AddTimeBtn from '@/assets/icons/btn-add-time.svg';
import BtnCanceled from '@/assets/icons/btn-canceled.svg';
import MinusTimeBtn from '@/assets/icons/btn-minus-time.svg';
import CheckMark from '@/assets/icons/check-mark.svg';
import IconPlus from '@/assets/icons/plus.svg';
import Input from '@/components/Input';
import useDetectClose from '@/hooks/use-detect-close';
import useMultipleImageUpload from '@/hooks/use-multiple-image-upload';
import useSingleImageUpload from '@/hooks/use-single-image-upload';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import Image from 'next/image';
import React, { useRef } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Controller,
  FieldError,
  FieldErrors,
  FieldValues,
  RegisterOptions,
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
  setValue: (name: string, value: unknown, config?: object) => void;
}

type ReservationDateTime = {
  date: dayjs.Dayjs | null;
  startTime: dayjs.Dayjs | null;
  endTime: dayjs.Dayjs | null;
};

export default function MyActivitiesCreate({
  options,
  register,
  errors,
  control,
  setValue,
  clearErrors,
}: MyActivitiesCreateProps) {
  const dropDownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useDetectClose(dropDownRef, false) as [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
  ];

  const { imageSrc, setImageSrc, handleSingleImagePreview } = useSingleImageUpload();

  const { imageSrcs, setImageSrcs, handleMultipleImagePreview } = useMultipleImageUpload();

  const toggleDropdown = () => setIsDropdownOpen((prev: boolean) => !prev);

  const bannerFileRef = useRef<HTMLInputElement | null>(null);
  const subFileRef = useRef<HTMLInputElement | null>(null);
  // input click method
  const handleBannerFileClick = () => {
    bannerFileRef?.current?.click();
  };

  const handleSubFileClick = () => {
    subFileRef?.current?.click();
  };

  const handleSingleImageCancelClick = () => {
    setImageSrc(null);
    setValue('bannerImage', null); // react-hook-form에 값 전달
  };

  const handleMultipleImageCancelClick = (index: number) => {
    setImageSrcs((prev) => prev.filter((_, i) => i !== index));
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
            type='number'
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
            const errors: Array<string | null> = [];
            let isError = false;

            for (let i = 0; i < value.length; i++) {
              const item = value[i];
              let error = null;

              // 기본 유효성 검사
              if (!item.date) {
                error = `날짜를 입력해주세요.`;
              } else if (!item.startTime) {
                error = `시작 시간을 입력해주세요.`;
              } else if (!item.endTime) {
                error = `종료 시간을 입력해주세요.`;
              } else if (item.startTime >= item.endTime) {
                error = `종료 시간은 시작 시간 이후여야 합니다.`;
              }

              // 시간대 중복 검사
              for (let j = 0; j < value.length; j++) {
                if (i !== j) {
                  const otherItem = value[j];

                  // 날짜와 시간대 비교
                  if (
                    item.date?.toString() === otherItem.date?.toString() &&
                    item.startTime < otherItem.endTime &&
                    item.endTime > otherItem.startTime
                  ) {
                    error = `겹치는 예약 가능 시간대가 존재합니다.`;
                    break;
                  }
                }
              }
              if (error !== null) {
                isError = true;
              }
              errors.push(error);
            }

            return !isError ? true : JSON.stringify(errors);
          },
        }}
        render={({ field, fieldState: { error } }) => {
          const errors = error && error.message ? JSON.parse(error.message) : null;
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
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: `${errors !== null && errors[index] !== null && errors[index]?.includes('날짜') ? '#FF472E' : '#79747E'}`,
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#0B3B2D',
                          },
                        },
                      }}
                      className={`${styles.datePickerContainer}`}
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
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: `${errors !== null && errors[index] !== null && errors[index]?.includes('시작') ? '#FF472E' : '#79747E'}`,
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#0B3B2D',
                              },
                            },
                          }}
                          value={availableDateTime.startTime}
                          onChange={(v) => {
                            field.value[index].startTime = v;
                            field.onChange([...field.value]);
                          }}
                        />
                      </div>
                      <div>~</div>
                      <TimePicker
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: `${errors !== null && errors[index] !== null && errors[index]?.includes('종료') ? '#FF472E' : '#79747E'}`,
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#0B3B2D',
                            },
                          },
                        }}
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
      <div>
        <div className={styles.fileUploadLayout}>
          <div className={`${errors.bannerImage ? styles.fileUploadWithError : styles.fileUploadDefault}`}>
            <label htmlFor='bannerImage' />
            <div className={styles.fileUploadtext} onClick={handleBannerFileClick}>
              <IconPlus />
              <span>이미지 등록</span>
            </div>
            <input
              {...register('bannerImage', { required: true })}
              className={styles.fileUploadInput}
              id='bannerImage'
              type='file'
              ref={bannerFileRef}
              onChange={(e) => {
                handleSingleImagePreview(e);
                if (e.target.files && e.target.files[0]) {
                  setValue('bannerImage', e.target.files[0]);
                }
                clearErrors('bannerImage');
              }}
            />
          </div>

          {imageSrc && (
            <div className={styles.previewImageContainer}>
              <div className={styles.previewImageBox}>
                <Image fill src={imageSrc} alt='배너 이미지' />
              </div>
              {imageSrc !== null && (
                <BtnCanceled className={styles.btnCanceled} onClick={handleSingleImageCancelClick} />
              )}
            </div>
          )}
        </div>
        {errors.bannerImage && <p className={styles.errorMessageStyle}>배너 이미지는 필수 입력 사항입니다.</p>}
      </div>
      <h2 className={styles.inputTitle}>소개 이미지</h2>
      <div className={styles.subImageContainer}>
        <div className={styles.subImageUploadBox}>
          <label htmlFor='subfile-upload' />
          <div>
            <div onClick={handleSubFileClick} className={styles.fileUploadtext}>
              <IconPlus />
              <span>이미지 등록</span>
            </div>
          </div>
          <input
            {...register('subfileImage')}
            multiple
            className={styles.fileUploadInput}
            id='subfile-upload'
            type='file'
            ref={subFileRef}
            onChange={(e) => {
              handleMultipleImagePreview(e);
              if (e.target.files && e.target.files.length > 0) {
                setValue('subfileImage', e.target.files);
              }
            }}
          />
        </div>
        {imageSrcs.map((src, index) => (
          <div key={index} className={styles.previewImageContainer}>
            <div className={styles.previewImageBox}>
              <Image fill src={src} alt={`소개 이미지 미리보기 ${index + 1}`} />
            </div>
            <BtnCanceled className={styles.btnCanceled} onClick={() => handleMultipleImageCancelClick(index)} />
          </div>
        ))}
      </div>
      <p className={styles.descPhrase}>*이미지는 최대 4개까지 등록 가능합니다.</p>
    </section>
  );
}
