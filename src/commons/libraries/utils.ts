import { padStart } from "lodash";

export const getDate = (date: string) => {
  const newdate = new Date(date);
  const yyyy = newdate.getFullYear();
  const mm = newdate.getMonth() + 1;
  const dd = newdate.getDate();
  return `${yyyy}-${mm}-${dd}`;
};
export const getDatecomma = (date: string) => {
  const newdate = new Date(date);
  const yyyy = newdate.getFullYear();
  const mm = String(newdate.getMonth() + 1).padStart(2, "0");
  const dd = String(newdate.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
};
