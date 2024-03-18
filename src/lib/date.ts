export default function formatDate(rawDate: string) {
  const date = new Date(rawDate);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}
