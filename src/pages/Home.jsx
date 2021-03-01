import React, { useState, useEffect } from 'react';
import * as service  from '../components/Service';
import Loader from '../components/Loader';
import MovieList from '../components/MovieList';
import Search from '../components/Search';
import WatchList from '../components/WatchList';
import Alert from '../components/Alert';


function setDefaultWatchList() {
  const watchList = localStorage.getItem('watchList');
  return (watchList && watchList.length) ? JSON.parse(watchList) : [];
}


const Home = () => {
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const [watchList, setWatchList] = useState(setDefaultWatchList());
  const [alertItem, setAlert] = useState('');

  
  useEffect(() => {
    service.getDefaultMovies()
      .then((data => {
        setData(data);
      }));
  }, [])

  useEffect(() => {
    const compareDataWithWatchList = () => {
      let tmp =  [...data];
      watchList.forEach((item) => {
        let idxData = data.findIndex((value) => value.id === item.id);
        if (idxData > -1) {
          const newItem = { ...data[idxData], isWatch: true };
          tmp = [...tmp.slice(0, idxData), newItem, ...tmp.slice(idxData + 1)];
        }
       });
       setResult(tmp);
    }
    compareDataWithWatchList();
  
  }, [data, watchList])


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
        setData(data);
      })
      .catch((error) => {
        setMessage(error.message);
        setData([]);
      });
  }

  const handleAddToWatchList = (item) => {
    const idx = watchList.findIndex((value) => value.id === item.id);
    if (idx < 0) {
      setWatchList([...watchList, item]);
      setAlert(`${item.title} added to watch list`);
    } else {
      const newWatchListItem = [...watchList.slice(0, idx), ...watchList.slice(idx + 1)];
      setWatchList([...newWatchListItem]);
      setAlert(`${item.title} removed from the watch list`);
    }
  };

  const handleRemoveFromWatchList = ({id, title}) => {
    setWatchList(watchList.filter((item) => item.id !== id));
    setAlert(`${title} removed from the watch list`);
  };

  const closeAlert = () => {
    setAlert('');
  };

  const movies = (!message) ? <MovieList getData ={result} addToWatchList={handleAddToWatchList}/> : message;
  const renderResult = (!result.length && !message) ? <Loader /> : movies;

  return (
    <> 
      <div className="position-fixed top-20 end-0 btn btn-light watchlist">
        <WatchList watchList={watchList} removeFromWatchList={handleRemoveFromWatchList}/>
      </div>
      <div className="row mb-4">
        <Search onSearch={handleSearch}/>
      </div>
      {renderResult}
      {alertItem && <Alert name={alertItem} closeAlert={closeAlert}/>}
    </>
  )
}

export default Home;