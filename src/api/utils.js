import axios from 'axios';

export const call = async ({ url, id = '' }) => {
  const res = await axios.get(`${url}/${id}`);

  return res.data;
};
