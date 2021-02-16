const API_KEY = process.env.REACT_APP_API_KEY;
const _apiBase = 'https://www.omdbapi.com/';
const _proxy = 'https://cors-anywhere.herokuapp.com';

const getResource = async (url) => {
  const response = await fetch(`${_apiBase}?apikey=${API_KEY}${url}`);
  if (!response.ok) {
    throw new Error(`Could not fetch ${url}` +
      `, received ${response.status}`)
  }
  return await response.json();
}

export const getDefaultMovies = async () => {
    const res = await getResource(`&plot=full&s=doctor`);
    return res.Search.map(_transformData);
}

export const getSearchMovies = async (value, type) => {
  const res = await getResource(`&plot=full&s=${value}${type !== 'all' ? `&type=${type}` : ''}`);
  return (res.Search) ? res.Search.map(_transformData) : res;
}

const _transformData = (item) => {
  const {Title, Type, Poster, imdbID} = item;
  return {
    title: Title,
    type: Type,
    poster: Poster,
    id: imdbID,
  }
}


