import moment from "moment";

const DEFAULT_DATE_FORMAT = "MMM D, YYYY hh:mm:ss a";

export const formatDate = (date: string) => {
  return moment(date).format(DEFAULT_DATE_FORMAT);
};
