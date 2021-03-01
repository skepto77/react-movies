import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <nav className="navbar navbar navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="https://img.icons8.com/fluent/96/000000/video-gallery.png" alt="movies" style={{paddingRight: '10px', height: '24px', width: '24px'}} />
          movies
        </Link>
        <Link to="/about"><span className="navbar-text">About</span></Link>
      </div>
    </nav>
  )
}