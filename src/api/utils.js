export const call = async ({ url, id = '' }) => {
  const baseUrl = process.env.REACT_APP_STRAPI_BASE_URL;
  const res = await fetch(`${baseUrl}/${url}/${id}`);
  const data = await res.json();

  return data;
};
