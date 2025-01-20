import { fontSizes, fontWeights } from '@/styles/fontStyles.css';
import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const activitiesPageContainer = style({
  marginBottom: '120px',
  maxWidth: '800px',
  margin: '0 auto',
});

export const topLayout = style({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '800px',
  margin: '0 auto',
  marginBottom: '34px',
});

export const mobileMenuTitle = style({
  display: 'flex',
  gap: '2px',
});

export const h2Title = style([fontSizes.text3xl, fontWeights.bold]);

export const submitButton = style([
  {
    backgroundColor: global.color.nomadBlack,
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '4px',

    '@media': {
      'screen and (max-width: 767px)': {
        width: '100%',
      },
    },
  },

  fontSizes.textLg,
]);

export const selectBoxContainer = style({
  borderRadius: '4px',
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
  margin: '8px 0 21px',
  color: global.color.red[300],
});

export const inputTitle = style([{}, fontSizes.text2xl, fontWeights.bold]);

export const addressContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr 59.6px',
  columnGap: '20px',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      gridTemplateColumns: 'auto 59.6px',
      columnGap: '5px',
    },
    'screen and (max-width: 767px)': {
      gridTemplateColumns: 'auto 59.6px',
      columnGap: '4px',
    },
  },
});

export const addressInputBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',

  '@media': {
    'screen and (max-width: 767px)': {
      gap: '0px',
      marginBottom: '12px',
    },
  },
});

export const detailAddressInput = style({
  '@media': {
    'screen and (max-width: 767px)': {
      marginTop: '4px',
    },
  },
});

export const BtnAddressFinder = style({
  flexBasis: '56px',
  whiteSpace: 'nowrap',
  backgroundColor: global.color.green[200],
  color: '#fff',
  borderRadius: '8px',
});

export const subImageUploadBox = style({
  border: `1px dashed ${global.color.gray[900]}`,
  borderRadius: '12px',
  width: '180px',
  height: '180px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media': {
    'screen and (max-width: 767px)': {
      width: '100%',
      height: '100%',
      padding: '10px',
      minHeight: '167px',
    },
  },
});

export const baseSubImageContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '24px',

  '@media': {
    'screen and (max-width: 767px)': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '8px',
      minHeight: '167px',
    },
  },
});

export const subImageBox = styleVariants({
  0: [baseSubImageContainer, {}],
  2: [
    baseSubImageContainer,
    {
      gridTemplateRows: '1fr 1fr',
    },
  ],
  4: [
    baseSubImageContainer,
    {
      gridTemplateRows: '1fr 1fr 1fr',
    },
  ],
});

export const fileUploadLayout = style({
  display: 'flex',
  gap: '16px',

  '@media': {
    'screen and (max-width: 767px)': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '8px',
      minHeight: '167px',
    },
  },
});

export const previewImageContainer = style({
  position: 'relative',
});

export const previewImageBox = style({
  borderRadius: '24px',
  width: '180px',
  height: '180px',
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
  right: '-12px',
  top: '-16px',
  cursor: 'pointer',
});

export const fileUploadContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  borderRadius: '12px',
  width: '180px',
  height: '180px',
  cursor: 'pointer',

  '@media': {
    'screen and (max-width: 767px)': {
      width: '100%',
      height: '100%',
      padding: '10px',
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
    gap: '30px',
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

export const descriptionInput = style({
  resize: 'none',
  width: '100%',
  height: '346px',
  borderRadius: '4px',
  padding: '16px 8px 0 16px',

  '::placeholder': {
    color: global.color.gray[600],
  },
});

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const inputSectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  marginBottom: '429px',
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
    fontSize: '20px',
    marginBottom: '10px',

    '@media': {
      'screen and (max-width: 767px)': {
        fontSize: '16px',
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
        fontSize: '16px',
      },
    },
    fontSize: '20px',
  },
  fontWeights.medium,
  fontSizes.textXl,
]);

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

export const endTimePickerLabel = style([
  {
    gridColumn: '5 / span 3',
    '@media': {
      'screen and (min-width: 768px) and (max-width: 1199px)': {
        gridColumn: 3,
      },
      'screen and (max-width: 767px)': {
        gridColumn: 3,
        fontSize: '16px',
      },
    },
    fontSize: '20px',
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
  top: '64px',
  width: '100%',
  background: '#fff',
  borderRadius: '4px',
  zIndex: 1,
  boxShadow: '0 10px 30px 3px rgba(5, 16, 55, 0.15)',
  padding: '8px 0',
});

export const selectBoxItem = style({
  padding: '8px',
  margin: '8px',
  borderRadius: '6px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',

  ':hover': {
    background: global.color.nomadBlack,
    color: '#fff',
  },
});

export const selectedOptionStyle = style({
  color: global.color.black,
  display: 'flex',
  height: '54px',
  alignItems: 'center',
  borderRadius: '4px',
  overflow: 'hidden',
  padding: '15px 16px',
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
  right: '16px',
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
  marginBottom: '21px',
});

export const dateTimePickerContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr auto',
  gap: '20px',
  height: '56px',
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
  marginBottom: '21px',
});

export const timePickerContainer = style({
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
});

export const descPhrase = style([
  {
    color: global.color.gray[900],
  },
  fontSizes.text2lg,
]);

globalStyle('.css-jupps9-MuiInputBase-root-MuiOutlinedInput-root', {
  height: '56px',
});

// mui input placeholder 글씨 크기
globalStyle('.css-1dune0f-MuiInputBase-input-MuiOutlinedInput-input', {
  fontSize: '16px',
});

globalStyle('.css-17f9e7e-MuiTypography-root-MuiDayCalendar-weekDayLabel', {
  fontSize: '14px',
});

globalStyle('.css-4k4mmf-MuiButtonBase-root-MuiPickersDay-root', {
  fontSize: '13px',
});

globalStyle('.css-qct7wd-MuiButtonBase-root-MuiPickersDay-root:focus.Mui-selected', {
  fontSize: '13px',
});

globalStyle('.css-qct7wd-MuiButtonBase-root-MuiPickersDay-root:focus', {
  fontSize: '13px',
});

globalStyle('.css-1chuxo2-MuiPickersCalendarHeader-label', {
  fontSize: '14px',
});

// 시계 글씨 크기
globalStyle('.css-ux17pc-MuiButtonBase-root-MuiMenuItem-root-MuiMultiSectionDigitalClockSection-item', {
  fontSize: '13px',
});

// 시계 ok 글씨 크기
globalStyle('.css-1588512-MuiButtonBase-root-MuiButton-root', {
  fontSize: '14px',
});

// input 내, svg 크기
globalStyle('.css-1umw9bq-MuiSvgIcon-root', {
  width: '32px',
  height: '32px',
});
