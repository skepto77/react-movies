import React, {useState} from 'react';
import WatchListItems from './WatchListItems';

export default function WatchList (props) {
  const { watchList } = props;
  const [ isShown, showList ] = useState(false);

  return (
    <> 
      <div className="" onClick = {() => showList(!isShown)}>
        <i className="bi bi-heart"></i> {watchList.length}
      </div>
      <div className="watchlist__list" style={{ display: isShown ? 'block' : 'none' }}>
        <WatchListItems {...props} />
      </div>
    </>
  )
}