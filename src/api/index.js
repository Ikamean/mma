import { call } from 'api/utils';

export const events = async () => await call({ url: '/events' });

export const athletes = async () => await call({ url: '/athletes' });
