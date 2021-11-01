export const convertKgToLb = ({ kg }) => {
  return (kg * 2.2).toFixed(0);
};

export const converToUpperCase = ({ value }) => value.toUpperCase();

export const convertTime = (time) => {
  const convertedTime = time.split(':');

  return `${convertedTime[0]}:${convertedTime[1]}`;
};
