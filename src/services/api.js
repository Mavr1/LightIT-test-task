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

export const addComment = async (id, payload) => {
  const data = await axios.post(`/api/reviews/${id}`, payload);
  return data;
};

export const register = async (credentials) => {
  const { data } = await axios.post(`/api/register/`, credentials);
  return data;
};

export const logIn = async (credentials) => {
  const { data } = await axios.post(`/api/login/`, credentials);
  return data;
};
