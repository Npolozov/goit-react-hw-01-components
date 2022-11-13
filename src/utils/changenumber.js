export const changeNumber = number => {
  return new Intl.NumberFormat('en-US').format(number);
};
