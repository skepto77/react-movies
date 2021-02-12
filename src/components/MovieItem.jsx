import React from 'react';

export default function MovieItem (props) {

  const shorten = (str) => {
    return (str.length > 5) ? `${str.substr(0, 10)} ...` : str;
  }

  const { getData } = props;

  const renderItem = () => {
    return getData.map((item) => {
      const {title, type, poster, id} = item;
      const classType = (type === 'movie') ? 'badge rounded-pill bg-primary' : 'badge rounded-pill bg-warning text-dark';
      return (
        <div className="col-sm-6" key={id}>
          <div className="card h-100 border-0 shadow p mb-5 bg-body rounded">
            <img src={poster} className="card-img-top" alt="{title}" />
            <div className="card-body">
              <p className={classType}>{type}</p>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{shorten(title)} This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      )
    })
  }
  const result = (getData) ? renderItem() : 'no movies';

  return (
    <>
        {result}
    </>
  )
}