import React from 'react';

export default function MovieList (props) {

  const shorten = (str) => {
    return (str.length > 5) ? `${str.substr(0, 10)} ...` : str;
  }

  const renderItem = () => {
    const { getData } = props;
    return getData.map((item) => {
      const {Title, Type, Poster, imdbID} = item;
      const classType = (Type === 'movie') ? 'badge rounded-pill bg-primary' : 'badge rounded-pill bg-warning text-dark';
      return (
        <div className="col-sm-6" key={imdbID}>
          <div className="card h-100 border-0 shadow p mb-5 bg-body rounded">
            <img src={Poster} className="card-img-top" alt="{Title}" />
            <div className="card-body">
              <p className={classType}>{Type}</p>
              <h5 className="card-title">{Title}</h5>
              <p className="card-text">{shorten(Title)}Description. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <>
        {renderItem()}
    </>
  )
}