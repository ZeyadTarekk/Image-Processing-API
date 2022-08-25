const validateNumber = (dim: string): boolean => {
  return /^\d*$/.test(dim);
};

export default validateNumber;
