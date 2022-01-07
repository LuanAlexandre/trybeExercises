const axios = require('axios');

const getCEPs = async (cep) => {
  const URL = `https://viacep.com.br/ws/${cep}/json/`;
  const {data} = await axios.get(URL);
  return data;
};

module.exports = {
  getCEPs,
};
