// export function formatDate(date) {
//   date = new Date(date);
//   return date.toString();
// }
export function formatDate(dateStr) {
  const date = new Date(dateStr);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Europe/London",
  };
  return date.toLocaleDateString("en-GB", options);
}

export function capitaliseString(str) {
  return `${str.charAt(0).toUpperCase()}${str.substring(1, str.length)}`;
}
