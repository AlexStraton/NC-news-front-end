export function convertDate(string) {
  // console.log(string);
  const date = new Date(string);
  let convertedDate = date.toDateString();
  return convertedDate;
}

// export function timer()
