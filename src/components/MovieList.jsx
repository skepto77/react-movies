import MovieItem from './MovieItem';

export default function MovieList (props) {

  return (
    <> 
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <MovieItem {...props}/>
      </div>
    </>
  )
}