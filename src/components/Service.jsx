import React from 'react';

export default class Service extends React.Component {
  _apiBase = 'http://www.omdbapi.com/';
  _apiKey = '61335e';
  _proxy = 'https://cors-anywhere.herokuapp.com';

  getResource = async (url) => {
    const response = await fetch(`${this._apiBase}?apikey=${this._apiKey}${url}`);
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

  getSearchMovies = async (value) => {
    const res = await this.getResource(`&plot=full&s=${value}`);
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

