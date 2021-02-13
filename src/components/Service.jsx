import React from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Service extends React.Component {
  _apiBase = 'http://www.omdbapi.com/';
  _proxy = 'https://cors-anywhere.herokuapp.com';

  getResource = async (url) => {
    const response = await fetch(`${this._apiBase}?apikey=${API_KEY}${url}`);
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${response.status}`)
    }
    return await response.json();
  }

  getDefaultMovies = async () => {
    const res = await this.getResource(`&plot=full&s=doctor`);
    return res.Search.map(this._transformData);
  }

  getSearchMovies = async (value, type) => {
    console.log(`&plot=full&s=${value}${type !== 'all' ? `&type=${type}` : ''}`)
    const res = await this.getResource(`&plot=full&s=${value}${type !== 'all' ? `&type=${type}` : ''}`);
    return (res.Search) ? res.Search.map(this._transformData) : res;
  }

  _transformData(item) {
    const {Title, Type, Poster, imdbID} = item;
    return {
      title: Title,
      type: Type,
      poster: Poster,
      id: imdbID,
    }
  }

}

