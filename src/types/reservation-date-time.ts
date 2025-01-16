import dayjs from 'dayjs';

export type ReservationDateTime = {
  date: dayjs.Dayjs | null;
  startTime: dayjs.Dayjs | null;
  endTime: dayjs.Dayjs | null;
};
