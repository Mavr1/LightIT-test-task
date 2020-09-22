import axios from 'axios';

axios.defaults.baseURL = 'http://smktesting.herokuapp.com';

export const getProducts = async () => {
  const products = await axios.get(`/api/products`);
  return products;
};
