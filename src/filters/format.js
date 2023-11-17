import dayjs from "dayjs";
export default (str, format = "YYYY-MM-DD HH:mm:ss") => {
  if (!str) {
    return "-";
  }
  return dayjs(str).format(format);
};
