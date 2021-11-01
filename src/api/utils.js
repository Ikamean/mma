import axios from 'axios';

export const call = async ({ url }) => {
  const res = await axios.get(url);

  return res.data;
};
