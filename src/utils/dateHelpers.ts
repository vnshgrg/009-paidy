import formatDistance from "date-fns/formatDistance";

export const formatDate = (date: Date | number) => {
  const _date = Number(date) ? new Date(date) : (date as Date);
  return formatDistance(_date, new Date(), { addSuffix: true });
};
