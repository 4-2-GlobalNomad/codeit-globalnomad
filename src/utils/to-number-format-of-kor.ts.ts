export const toNumberFormatOfKor = (num: number): string => {
  const currencySymbol = '₩';
  return `${currencySymbol} ${num.toLocaleString('ko-KR')}`;
};
