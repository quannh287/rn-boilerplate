export const replaceAll = (text: string, searchValue: string, replaceValue: string) => {
  return text.split(searchValue).join(replaceValue);
};
