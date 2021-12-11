import axios from "axios";

const btcApi = async (req, res) => {
  const result = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');

  return res.status(200).json(result.data);
};

export default btcApi;
