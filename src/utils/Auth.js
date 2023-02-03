export const BASE_URL = 'https://api.gettotawer-diploma.nomoredomains.icu';

function _checkRes(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (email, name, password) => fetch(`${BASE_URL}/signup`, {
  credentials: 'include',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, name, password }),
})
  .then(_checkRes);

export const authorize = (email, password) => fetch(`${BASE_URL}/signin`, {
  credentials: 'include',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ password, email }),
})
  .then(_checkRes);

export const logOut = () => {
  console.log('выходим');
  return fetch(`${BASE_URL}/signout`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(_checkRes);
};

export const getContent = () => fetch(`${BASE_URL}/users/me`, {
  credentials: 'include',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(_checkRes);

export const changeUserInformation = (name, email) => fetch(`${BASE_URL}/users/me`, {
  credentials: 'include',
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name, email }),
})
  .then(_checkRes);
