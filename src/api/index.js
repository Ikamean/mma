import { call } from 'api/utils';

const request = async ({ url, id }) => await call({ url, id });

export default request;
