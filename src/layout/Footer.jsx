import React from 'react';

export default function Footer() {

  return (
    <footer className="navbar navbar-light bg-light">
      <div className="container-fluid d-flex flex-row justify-content-justify">
          <div className="">
            movies app, {new Date().getFullYear()}
          </div>
          <div className="">
            <span className="navbar-xtext">Github</span>
          </div>
      </div>
    </footer>
  )
}
