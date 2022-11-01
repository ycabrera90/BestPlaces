let key = new Date().getTime();

export const keyGen = () => {
  key++;
  return key.toString();
};
