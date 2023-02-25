export const capitalise = (str = '') => str[0].toUpperCase() + str.slice(1);
export const equalStrings = (str1 = '', str2 = '') =>
  str1.toLowerCase() === str2.toLowerCase();

export const removeJSONFromString = (str = '') => str.replace('.json', '');

export const isMobile = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  if (window.innerWidth <= 600) {
    return true;
  }
  return false;
};
