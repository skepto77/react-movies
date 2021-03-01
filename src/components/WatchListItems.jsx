import { Link } from 'react-router-dom';

export default function WatchListItems (props) {
  const { watchList, removeFromWatchList } = props;
  const renderItems = () => {
    return (
      watchList.map(item => {
        const {id, title} = item;
        return (
          <li key={id} className="list-group-item d-flex justify-content-between align-items-center">
            <Link to={`/${id}`} className="btn btn-light">{title}</Link>
            <span className="" onClick={() => removeFromWatchList({id, title})}><i className="bi bi-x"></i></span>
          </li>
        )
      })
    )
  }
  return (
    <> 
      <h5>My list</h5>
      <ul className="list-group">
      {watchList.length ? renderItems() : <p>List is empty</p>}
      </ul>
    </>
  )
}