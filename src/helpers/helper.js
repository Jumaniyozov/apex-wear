import { Base64 } from 'js-base64';

export function encodeUserToken(login, password) {
  return Base64.encode(login + ':' + password);
}
