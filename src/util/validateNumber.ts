const validateNumber = (dim: string): boolean => {
  return /^\d*$/.test(dim) && parseInt(dim) > 0;
};

export default validateNumber;
