import React, { useState, useEffect } from 'react';
import Header from './layout/Header'
import Footer from './layout/Footer'
import * as service  from './components/Service';
import Loader from './components/Loader';
import MovieList from './components/MovieList'
import Search from './components/Search'
import WatchList from './components/WatchList'
import Alert from './components/Alert'

function setDefaultWatchList() {
  const watchList = localStorage.getItem('watchList');
  return (watchList && watchList.length) ? JSON.parse(watchList) : [];
}

export default function App() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState(null);
  const [watchList, setWatchList] = useState(setDefaultWatchList());
  const [alertItem, setAlert] = useState('');

  
  useEffect(() => {
    service.getDefaultMovies()
      .then((data => {
        compareDataWithWatchList(data);
      }));
    // eslint-disable-next-line
  }, [])


  const compareDataWithWatchList = (data) => {
    let tmp =  [...data];
    watchList.forEach((item) => {
      let idxData = data.findIndex((value) => value.id === item.id);
      if (idxData > -1) {
        const newItem = { ...data[idxData], isWatch: true };
        tmp = [...tmp.slice(0, idxData), newItem, ...tmp.slice(idxData + 1)];
      }
     });
     setData(tmp);
  }


  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(watchList));
  }, [watchList])

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
        compareDataWithWatchList(data);
      })
      .catch((error) => {
        setMessage(error.message);
        setData([]);
      });
  }

  const handleAddToWatchList = (item) => {
    const idx = watchList.findIndex((value) => value.id === item.id);
    const idxData = data.findIndex((value) => value.id === item.id);
    if (idx < 0) {
      const newItem = { ...data[idxData], isWatch: true }
      setWatchList([...watchList, item]);
      setData([...data.slice(0, idxData), newItem, ...data.slice(idxData + 1)])
      setAlert(`${item.title} added to watch list`);
    } else {
      const newWatchListItem = [...watchList.slice(0, idx), ...watchList.slice(idx + 1)];
      const newItem = { ...data[idxData], isWatch: false };
      setWatchList([...newWatchListItem]);
      setData([...data.slice(0, idxData), newItem, ...data.slice(idxData + 1)])
      setAlert(`${item.title} removed from the watch list`);
    }
  };

  const handleRemoveFromWatchList = (id) => {
    setWatchList(watchList.filter((item) => item.id !== id));
    const idxData = data.findIndex((value) => value.id === id);
    const newItem = { ...data[idxData], isWatch: false };
    setData([...data.slice(0, idxData), newItem, ...data.slice(idxData + 1)]);
    setAlert(`${id} removed from the watch list`);
  };

  const closeAlert = () => {
    setAlert('');
  };

  const movies = (!message) ? <MovieList getData ={data} addToWatchList={handleAddToWatchList}/> : message;
  const renderResult = (!data.length && !message) ? <Loader /> : movies;

  return (
    <>
      <Header />
      <main className="container position-relative">
        <div className="row">
          <h2>app</h2>
        </div>
        <div className="position-fixed top-20 end-0 btn btn-light watchlist">
        <WatchList watchList={watchList} removeFromWatchList={handleRemoveFromWatchList}/>
        </div>
        <div className="row mb-4">
          <Search onSearch={handleSearch}/>
        </div>
        {renderResult}
      </main>
      {alertItem && <Alert name={alertItem} closeAlert={closeAlert}/>}
      <Footer />
    </>
  );
  // }
}

