import { Base64 } from 'js-base64';

export function encodeUserToken(login, password) {
  return Base64.encode(login + ':' + password);
}

export function getElementById(id) {
  return document.getElementById(id);
}

export function fetchWithAuthentication(url, authToken) {
  const headers = new Headers();
  headers.set('Authorization', `Basic ${authToken}`);
  return fetch(url, { headers });
}

export async function displayProtectedImage(imageId, imageUrl, authToken) {
  // Fetch the image.
  const response = await fetchWithAuthentication(imageUrl, authToken);

  // Create an object URL from the data.
  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);

  // Update the source of the image.
  const imageElement = getElementById(imageId);
  imageElement.src = objectUrl;
  imageElement.onload = () => URL.revokeObjectURL(objectUrl);
}
