import React from 'react';

export default class Service extends React.Component {
  _apiBase = 'http://www.omdbapi.com/';
  _apiKey = '61335e';
  _proxy = 'https://cors-anywhere.herokuapp.com';

  async getResource(url) {
    const response = await fetch(`${this._apiBase}?apikey=${this._apiKey}${url}`);
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${response.status}`)
    }
    return await response.json();
  }

  getAllMovies = async () => {
    const res = await this.getResource(`&plot=full&s=doctor`);
    return res;
  }

}

