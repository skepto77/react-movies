import React from 'react';

export default () => {

  return (
    <footer className="navbar navbar-light bg-light">
      <div className="container-fluid d-flex flex-row justify-content-around">
          <div className="">
            Movies app, {new Date().getFullYear()}
          </div>
          <div className="">
            <span className="navbar-xtext">Github</span>
          </div>
      </div>
    </footer>
  )
}