import React from 'react';
import MovieItem from './MovieItem';
import Spinner from './Spinner';

export default function MovieList (props) {

  //const isLoading = (!props.getData.length) ? <Spinner /> : null;
  return (
    <> 
      {/* {isLoading} */}
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <MovieItem {...props}/>
      </div>
    </>
  )
}