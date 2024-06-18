export function convertDate(string) {
  const date = new Date(string);
  let convertedDate = date.toLocaleDateString("en-GB");
  console.log(convertedDate);
  return convertedDate;
}
