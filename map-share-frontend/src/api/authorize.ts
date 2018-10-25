// import { Routes } from '../../../';

export function authorize(accountId: string) {
  const body = { accountId };

  return fetch(Routes.Authorize, {
    body: JSON.stringify(body),
    method: 'POST',
  }).then(response => response.json());
}
