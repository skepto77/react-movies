import React from 'react';

export default function Header() {

  return (
    <nav className="navbar navbar navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="#!">
          <img src="https://img.icons8.com/fluent/96/000000/video-gallery.png" alt="movies" style={{paddingRight: '10px'}, {height: '24px'}, {width: '24px'}} />
          movies
        </a>
        <span className="navbar-text">Github</span>
      </div>
    </nav>
  )
}