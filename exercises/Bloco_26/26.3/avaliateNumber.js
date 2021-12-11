const avaliateNumber = (number) => {
  if (number > 0) return 'positivo';
  if (number < 0) return 'negativo';
  return 'neutro';
};

export default avaliateNumber;
