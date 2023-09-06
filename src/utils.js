export function formatDate(date) {
  date = new Date(date);
  return date.toString();
}

export function capitaliseString(str) {
  return `${str.charAt(0).toUpperCase()}${str.substring(1, str.length)}`;
}
