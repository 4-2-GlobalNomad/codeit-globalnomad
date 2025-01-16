import { fontSizes, fontWeights } from '@/styles/fontStyles.css';
import { globalStyle, style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const selectBoxContainer = style({
  borderRadius: '0.4rem',
  position: 'relative',
});

export const errorStyle = style({
  border: `1px solid ${global.color.red[300]}`,
  selectors: {
    '&:focus-within': {
      border: `1px solid ${global.color.red[300]}`,
    },
  },
});

export const dashedErrorStyle = style({
  border: `1px dashed ${global.color.red[300]}`,
  selectors: {
    '&:focus-within': {
      border: `1px dashed ${global.color.red[300]}`,
    },
  },
});

export const errorMessageStyle = style({
  gridColumn: '1 / span 7',
  margin: '0.8rem 0 2.1rem',
  color: global.color.red[300],
});

export const inputTitle = style([{}, fontSizes.text2xl, fontWeights.bold]);

export const addressContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr 59.6px',
  columnGap: '2rem',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      gridTemplateColumns: 'auto 59.6px',
      columnGap: '0.5rem',
    },
    'screen and (max-width: 767px)': {
      gridTemplateColumns: 'auto 59.6px',
      columnGap: '0.4rem',
    },
  },
});

export const addressInputBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',

  '@media': {
    'screen and (max-width: 767px)': {
      gap: '0rem',
      marginBottom: '1.2rem',
    },
  },
});

export const detailAddressInput = style({
  '@media': {
    'screen and (max-width: 767px)': {
      marginTop: '0.4rem',
    },
  },
});

export const BtnAddressFinder = style({
  flexBasis: '5.6rem',
  whiteSpace: 'nowrap',
  backgroundColor: global.color.green[200],
  color: '#fff',
  borderRadius: '0.8rem',
  padding: '0.8rem 1.6rem',

  height: '59.6px',
});

export const subImageUploadBox = style({
  border: `1px dashed ${global.color.gray[900]}`,
  borderRadius: '1.2rem',
  width: '18rem',
  height: '18rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media': {
    'screen and (max-width: 767px)': {
      width: '100%',
      height: '100%',
      padding: '1rem',
      minHeight: '16.7rem',
    },
  },
});

export const subImageContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2.4rem',

  '@media': {
    'screen and (max-width: 767px)': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr 1fr',
      gap: '0.8rem',
      minHeight: '16.7rem',
    },
  },
});

export const fileUploadLayout = style({
  display: 'flex',
  gap: '1.6rem',

  '@media': {
    'screen and (max-width: 767px)': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0.8rem',
      minHeight: '16.7rem',
    },
  },
});

export const previewImageContainer = style({
  position: 'relative',
});

export const previewImageBox = style({
  borderRadius: '2.4rem',
  width: '18rem',
  height: '18rem',
  overflow: 'hidden',
  position: 'relative',

  '@media': {
    'screen and (max-width: 767px)': {
      width: '100%',
      height: '100%',
    },
  },
});

export const btnCanceled = style({
  position: 'absolute',
  right: '-1.2rem',
  top: '-1.6rem',
  cursor: 'pointer',
});

export const fileUploadContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  borderRadius: '1.2rem',
  width: '18rem',
  height: '18rem',
  cursor: 'pointer',

  '@media': {
    'screen and (max-width: 767px)': {
      width: '100%',
      height: '100%',
      padding: '1rem',
    },
  },
});

export const fileUploadDefault = style([fileUploadContainer, { border: `1px dashed ${global.color.gray[900]}` }]);

export const fileUploadWithError = style([fileUploadContainer, dashedErrorStyle]);

export const fileUploadtext = style([
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '3rem',
    color: global.color.gray[900],
  },
  fontSizes.text2xl,
]);

export const fileUploadInput = style({
  display: 'none',
});

export const arrow = style({
  transition: 'transform 0.3s',
});

export const rotated = style({
  transform: 'rotate(180deg)',
});

export const descriptionInput = style({
  resize: 'none',
  width: '100%',
  height: '34.6rem',
  borderRadius: '0.4rem',
  padding: '1.6rem 0.8rem 0 1.6rem',

  '::placeholder': {
    color: global.color.gray[600],
  },
});

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const inputSectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
  marginBottom: '42.9rem',

  '@media': {
    'screen and (max-width: 767px)': {
      marginBottom: '3rem',
    },
  },
});

export const waveSign = style({
  gridColumn: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      display: 'none',
    },
    'screen and (max-width: 767px)': {
      display: 'none',
    },
  },
});

export const datePickerLabel = style([
  {
    gridColumn: 1,
    fontSize: '2rem',
    marginBottom: '1rem',

    '@media': {
      'screen and (max-width: 767px)': {
        fontSize: '1.6rem',
      },
    },
  },
  fontWeights.medium,
  fontSizes.textXl,
]);

export const startTimePickerLabel = style([
  {
    gridColumn: '3 / span 2',
    '@media': {
      'screen and (min-width: 768px) and (max-width: 1199px)': {
        gridColumn: 2,
      },
      'screen and (max-width: 767px)': {
        gridColumn: 2,
        fontSize: '1.6rem',
      },
    },
    fontSize: '2rem',
  },
  fontWeights.medium,
  fontSizes.textXl,
]);

export const endTimePickerLabel = style([
  {
    gridColumn: '5 / span 3',
    '@media': {
      'screen and (min-width: 768px) and (max-width: 1199px)': {
        gridColumn: 3,
      },
      'screen and (max-width: 767px)': {
        gridColumn: 3,
        fontSize: '1.6rem',
      },
    },
    fontSize: '2rem',
  },
  fontWeights.medium,
  fontSizes.textXl,
]);

export const categoryLayout = style({
  cursor: 'pointer',
});

export const categoryInput = style({
  width: '100%',
  height: '100%',
  cursor: 'pointer',
  border: 'none',

  selectors: {
    '&::placeholder': {
      color: global.color.gray[600],
      fontWeight: '400',
    },
    '&:focus': {
      outline: 'none',
    },
  },
});

export const selectBoxList = style({
  position: 'absolute',
  top: '6.4rem',
  width: '100%',
  background: '#fff',
  borderRadius: '0.4rem',
  zIndex: 1,
  boxShadow: '0 10px 30px 3px rgba(5, 16, 55, 0.15)',
  padding: '0.8rem 0',
});

export const selectBoxItem = style({
  padding: '0.8rem',
  margin: '0.8rem',
  borderRadius: '0.6rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',

  ':hover': {
    background: global.color.nomadBlack,
    color: '#fff',
  },
});

export const selectedOptionStyle = style({
  color: global.color.black,
  display: 'flex',
  height: '5.4rem',
  alignItems: 'center',
  borderRadius: '0.4rem',
  overflow: 'hidden',
  padding: '1.5rem 1.6rem',
  cursor: 'pointer',

  selectors: {
    '&:focus-within': {
      border: `1px solid ${global.color.green[200]}`,
    },
  },
});

export const defaultInputStyle = style({
  border: `1px solid ${global.color.gray[800]}`,
});

export const checkMark = style({
  visibility: 'hidden',
  selectors: {
    [`${selectBoxItem}:hover &`]: {
      visibility: 'visible',
    },
  },
});

// 달력 커스텀
globalStyle('.react-datepicker__input-container .react-datepicker__calendar-icon', {
  right: '1.6rem',
});

globalStyle('.react-datepicker__view-calendar-icon input', {
  padding: '8px 0 8px 16px',
});

globalStyle('.react-datepicker__input-container', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '40px',
});

export const datePickerLabelContainer = style({
  display: 'grid',

  gridTemplateColumns: '377fr 21px 140fr 38px  140fr 21px 56px',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      gridTemplateColumns: '149fr 104fr 104fr 56px',
      columnGap: '5px',
    },
    'screen and (max-width: 767px)': {
      gridTemplateColumns: '107fr 79fr 79fr 56px',
      columnGap: '5px',
      whiteSpace: 'nowrap',
    },
  },
});

export const horizon = style({
  gridColumn: '1 / span 7',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      gridColumn: '1 / span 4',
    },
    'screen and (max-width: 767px)': {
      gridColumn: '1 / span 4',
    },
  },
  border: `1px solid ${global.color.gray[300]}`,
  marginBottom: '2.1rem',
});

export const dateTimePickerContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr auto',
  gap: '2rem',
  height: '5.6rem',
  alignItems: 'center',
});

export const TimeButton = style({
  gridColumn: 7,
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      gridColumn: 4,
    },
    'screen and (max-width: 767px)': {
      gridColumn: 4,
    },
  },
  cursor: 'pointer',
});

export const datePickerContainer = style({
  gridColumn: 1,
});

export const startTimePickerContainer = style({
  gridColumn: 3,
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      gridColumn: 2,
    },
    'screen and (max-width: 767px)': {
      gridColumn: 2,
    },
  },
});

export const endTimePickerContainer = style({
  gridColumn: 5,
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      gridColumn: 3,
    },
    'screen and (max-width: 767px)': {
      gridColumn: 3,
    },
  },
});

export const descPhrase = style([
  {
    color: global.color.gray[900],
  },
  fontSizes.text2lg,
]);

globalStyle('.css-jupps9-MuiInputBase-root-MuiOutlinedInput-root', {
  height: '5.6rem',
});

// mui input placeholder 글씨 크기
globalStyle('.css-1dune0f-MuiInputBase-input-MuiOutlinedInput-input', {
  fontSize: '1.6rem',
});

globalStyle('.css-17f9e7e-MuiTypography-root-MuiDayCalendar-weekDayLabel', {
  fontSize: '1.4rem',
});

globalStyle('.css-4k4mmf-MuiButtonBase-root-MuiPickersDay-root', {
  fontSize: '1.3rem',
});

globalStyle('.css-qct7wd-MuiButtonBase-root-MuiPickersDay-root:focus.Mui-selected', {
  fontSize: '1.3rem',
});

globalStyle('.css-qct7wd-MuiButtonBase-root-MuiPickersDay-root:focus', {
  fontSize: '1.3rem',
});

globalStyle('.css-1chuxo2-MuiPickersCalendarHeader-label', {
  fontSize: '1.4rem',
});

// 시계 글씨 크기
globalStyle('.css-ux17pc-MuiButtonBase-root-MuiMenuItem-root-MuiMultiSectionDigitalClockSection-item', {
  fontSize: '1.3rem',
});

// 시계 ok 글씨 크기
globalStyle('.css-1588512-MuiButtonBase-root-MuiButton-root', {
  fontSize: '1.4rem',
});

// input 내, svg 크기
globalStyle('.css-1umw9bq-MuiSvgIcon-root', {
  width: '32px',
  height: '32px',
});
