export const removeFirstO = (string: string) => {
  string = string[0].toUpperCase() + string.slice(1);

  return [string.slice(0, string.indexOf('o')), string.slice(string.indexOf('o') + 1)];
};
