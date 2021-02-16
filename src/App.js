import React, { useState, useEffect } from 'react';
import Header from './layout/Header'
import Footer from './layout/Footer'
import * as service  from './components/Service';
import Spinner from './components/Spinner';
import MovieList from './components/MovieList'
import Search from './components/Search'

export default function App() {
  const [data, setData] = useState([]);
  const [loadnig, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  
  
  // constructor() {
  //   super();
  //   this.state = {
  //     data: [],
  //     loadnig: true,
  //     message: null
  //   }
  // }

  // let service = Service;

  useEffect(() => {
    service.getDefaultMovies()
      .then((data => {
        setData(data)
      }));
  }, [])

  const handleSearch = (value, type) => {
    setData([]);
    service.getSearchMovies(value, type)
      .then((data) => {
        if (data.Error) {
          throw new Error(data.Error)
        }
        return data;
      })
      .then((data) => {
        setMessage(null);
        setData(data);
      })
      .catch((error) => {
        setMessage(error.message);
        setData([]);
      });
  }

  const movies = (!message) ? <MovieList getData ={data} /> : message;
  const isLoading = (data.length === 0 && !message) ? <Spinner /> : null;
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <h2>app</h2>
        </div>
        <div className="row mb-4">
          <Search onSearch={handleSearch}/>
        </div>
        {isLoading}
        {movies}
      </main>
      <Footer />
    </>
  );
  // }
}

