export const hasO = (string: string) => string.indexOf('o') !== -1;

export const removeFirstO = (string: string) => {
  string = string[0].toUpperCase() + string.slice(1);

  const result =
    string.indexOf('o') === -1
      ? [string]
      : [string.slice(0, string.indexOf('o')), string.slice(string.indexOf('o') + 1)];

  return result;
};
