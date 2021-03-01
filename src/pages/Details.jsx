import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMovieById } from '../components/Service';
import Loader from '../components/Loader';
import MovieDetails from '../components/MovieDetails';


export default function Details() {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    const { goBack } = useHistory();

    useEffect(() => {
      getMovieById(id).then((data) => setMovie(data));
    }, [id]);

    return (
      <>
        <div className="row mb-4">
          <div className="col-12">
            <button className="btn btn-light" onClick={goBack}>back</button>
          </div>
        </div>
        {!movie.title ? (<Loader />) : (<MovieDetails movie={movie}/>)}
      </> 
    )
}