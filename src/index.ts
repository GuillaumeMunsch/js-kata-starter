export const isMultipleOf =
  (moduloValue: number) =>
  (value: number): boolean => {
    return value % moduloValue === 0;
  };

export const computeValue = (index: number): string => {
  let value: string = "";

  if (isMultipleOf(3)(index)) {
    value += "fizz";
  }
  if (isMultipleOf(5)(index)) {
    value += "buzz";
  }
  return value || `${index}`;
};

export const fizzbuzz = (n: number): string[] => {
  const arr: string[] = [];

  for (let i = 0; i < n; i++) {
    arr.push(computeValue(i + 1));
  }
  return arr;
};
