import axios from 'axios';

export const call = async ({ url, id = '' }) => {
  const baseUrl = process.env.REACT_APP_STRAPI_BASE_URL;
  const res = await axios.get(`${baseUrl}/${url}/${id}`);

  return res.data;
};
