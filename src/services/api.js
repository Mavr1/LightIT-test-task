import axios from 'axios';

axios.defaults.baseURL = 'http://smktesting.herokuapp.com';

export const getProducts = async () => {
  const products = await axios.get(`/api/products`);
  return products;
};

export const getComments = async (id) => {
  const comments = await axios.get(`/api/reviews/${id}`);
  return comments;
};
