import axios from 'axios';

export const call = async ({ url, id = '' }) => {
  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:1337/'
      : 'https://gmmap.herokuapp.com/';
  const res = await axios.get(`${baseUrl}${url}/${id}`);

  return res.data;
};
