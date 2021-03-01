import { Link } from 'react-router-dom';

export default function MovieItem (props) {

  const { getData, addToWatchList = Function.prototype } = props;
  
  const renderMovie = () => {
    return getData.map((item) => {
      const {title, type, poster, id, isWatch} = item;
      const classType = (type === 'movie') ? 'badge rounded-pill bg-primary' : 'badge rounded-pill bg-warning text-dark';
      return (
        <div className="col-sm-6" key={id}>
          <div className="card h-100 border-0 shadow p mb-5 bg-body rounded">
            <img src={poster} className="card-img-top" alt="{title}" />
            <div className="card-body">
              <p className={classType}>{type}</p>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{`${title.slice(0, 10)}...`} This content is a little bit longer.</p>
              <Link to={`/${id}`} type="button" className="btn btn-sm btn-primary" style={{marginRight: '10px'}}>Details</Link>
              <button type="button" className="btn btn-sm btn-light" onClick={() => addToWatchList({id, title})}>{(isWatch) ? <i className="bi bi-heart-fill" style={{color: 'red'}}></i> : <i className="bi bi-heart"></i>}</button>
            </div>
          </div>
        </div>
      )
    })
  }
  
  // const result = (getData) ? renderMovie() : 'no movies';

  return (
    <>
        {renderMovie()}
    </>
  )
}