export default function MovieDetails({ movie }) {
    const renderDescription = () => {
      return (  
        Object.keys(movie)
          .filter((key) => !['title', 'Ratings', 'poster', 'imdbVotes', 'Response', 'isWatch', 'type', 'id'].includes(key))
          .map((key) => {
            return (
              <li key={key} className="list-group-item"><strong>{key}:</strong> {movie[key]}</li>
            );
          })     
      )
    }

    const {title, poster, type, isWatch} = movie;
    const classType = (type === 'movie') ? 'badge rounded-pill bg-primary' : 'badge rounded-pill bg-warning text-dark';

    return (
      <>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <img src={poster} className="card-img-top" alt="{title}" />
          </div>
          <div className="col-md-8 col-sm-12">
            <h3>{title} <span className={classType}>{type}</span></h3>
            <ul className="list-group list-group-flush">
              {renderDescription(movie)}
            </ul>
          </div>
        </div>
      </> 
    )
}