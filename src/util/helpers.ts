export const generateDate = (startDate?: Date | string) => {
  const date = startDate ? new Date(startDate) : new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};
