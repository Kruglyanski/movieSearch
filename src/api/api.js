const apiBaseUrl = 'https://api.themoviedb.org/'

export const key = 'a4627161db7eed4507b5d68284cafa77'

const apiImageUrl = 'https://image.tmdb.org/t/p/w500'

const apiUrl = endpoint => apiBaseUrl + endpoint
export const imageUrl = endpoint => apiImageUrl + endpoint

export const get = endpoint =>
  fetch(apiUrl(endpoint), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
