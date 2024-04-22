export const getFormattedDate = (dateStr) => {
  let date = new Date(dateStr);
  let formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

  return formattedDate;
};
