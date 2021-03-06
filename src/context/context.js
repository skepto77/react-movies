import { createContext, useReducer, useEffect } from 'react';
import { reducer } from './reducer';
import * as service  from '../components/Service';

export const MoviesContext = createContext();

function setDefaultWatchList() {
  const watchList = localStorage.getItem('watchList');
  return (watchList && watchList.length) ? JSON.parse(watchList) : [];
}

const initialState = {
  data: [],
  watchList: setDefaultWatchList(),
  loading: true,
  message: null,
  alert: '',
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const compareDataWithWatchList = (data) => {
    if (!Array.isArray(data)) {
      data = [data];
    }
    return data.map((item) => {
      let idxData = state.watchList.findIndex((value) => value.id === item.id);
      if (idxData > -1) {
        return {...item, isWatch: true }
      }
      return {...item, isWatch: false }
    })
  }

  state.setData = (data) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_DATA', payload: compareDataWithWatchList(data) });
    dispatch({ type: 'SET_LOADING', payload: false });
  };

  state.addToWatchList = (item) => {
    const idx = state.watchList.findIndex((value) => value.id === item.id);
    if (idx < 0) { 
      dispatch({ type: 'ADD_TO_WATCHLIST', 
        payload: {
          watchList:[...state.watchList, item],
          data: compareDataWithWatchList(state.data),
          alert: `${item.title} added to watch list`
        }
      });
    } else {
      const newWatchListItem = [...state.watchList.slice(0, idx), ...state.watchList.slice(idx + 1)];
      dispatch({ type: 'ADD_TO_WATCHLIST', 
        payload: {
          watchList:[...newWatchListItem],
          data: compareDataWithWatchList(state.data),
          alert: `${item.title} removed from the watch list`,
        }
      // dispatch({ type: 'ADD_TO_WATCHLIST', payload: [...newWatchListItem] });
      // dispatch({ type: 'SET_DATA', payload: compareDataWithWatchList(state.data) });
      // dispatch({ type: 'SET_ALERT', payload: `${item.title} removed from the watch list`});
      });
    }
  };

  state.removeFromWatchList = ({id, title}) => {
    dispatch({ type: 'REMOVE_FROM_WATCHLIST',
      payload: {
        watchList: state.watchList.filter((item) => item.id !== id),
        alert: `${title} removed from the watch list`,
      }
    });
  };

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(state.watchList));
    dispatch({ type: 'SET_DATA', payload: compareDataWithWatchList(state.data) });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.watchList])

  state.handleSearch = (value, type) => {
    dispatch({ type: 'SET_DATA', payload: []});
    service.getSearchMovies(value, type)
      .then((data) => {
        if (data.Error) {
          throw new Error(data.Error)
        }
        return data;
      })
      .then((data) => {
        dispatch({ type: 'SET_MESSAGE', payload: null });
        dispatch({ type: 'SET_DATA', payload: compareDataWithWatchList(data) });
        dispatch({ type: 'SET_LOADING', payload: false });
      })
      .catch((error) => {
        dispatch({ type: 'SET_MESSAGE', payload: error.message });
        dispatch({ type: 'SET_DATA', payload: [] });
        dispatch({ type: 'SET_LOADING', payload: false });
      });
  };

  // state.openAlert = (message) => {
  //   dispatch({ type: 'SET_MESSAGE', payload: message });
  // }

  state.closeAlert = () => {
      dispatch({ type: 'CLOSE_ALERT' });
  };

  return (
      <MoviesContext.Provider value={state}>{children}</MoviesContext.Provider>
  );
};