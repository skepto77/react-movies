import React from 'react';
import App from '../App';
import MovieList from '../components/MovieList'

export default function Main (props) {

  return (
    <main className="container">
      <div className="row">
        <h2>app</h2>
      </div>
        <MovieList {...props}/>
    </main>
  )
}