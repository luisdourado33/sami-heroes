import api from './api';

export type ErrorMessage = {
  error: string;
  message: string;
  statusCode: string;
};

export function isError<T>(
  response: T | ErrorMessage
): response is ErrorMessage {
  return typeof (response as ErrorMessage).error !== 'undefined';
}

export default async function authorizedRequest(url: string, opts = {}) {
  const patchedOpts = {
    ...opts,
    headers: {
      'Content-Type': 'application/json',
    },
    url,
  };

  return await api(patchedOpts);
}
