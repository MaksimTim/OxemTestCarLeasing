//Вспомогательная ф-я для установки границ значения инпута.
export const minMaxInputChanger = (value, min, max) => {
  let newValue = value;
  if (value < min) {
    newValue = min;
  }
  if (value > max) {
    newValue = max;
  }
  return newValue;
};