import React from 'react';
import Header from './layout/Header'
import Footer from './layout/Footer'
import Service from './components/Service';
import Spinner from './components/Spinner';
import MovieList from './components/MovieList'
import Search from './components/Search'
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loadnig: true,
      message: null
    }
  }

  service = new Service();
  
  componentDidMount() {
    this.service.getDefaultMovies()
      .then((data => {
        this.setState({data})
      }));
  }

  handleSearch = (value) => {
    this.setState({data:[]})
    this.service.getSearchMovies(value)
      .then((data => {
        if (data.Error) {
          this.setState({data: [], message:data.Error })
          return
        }
        this.setState({data, message:null})
      }));
  }

  render() {
    const {data, message}  = this.state;
    const movies = (!message) ? <MovieList getData ={data} /> : message;
    const isLoading = (data.length === 0 && !message) ? <Spinner /> : null;
    return (
      <>
        <Header />
        <main className="container">
          <div className="row">
            <h2>app</h2>
          </div>
          <Search onSearch={this.handleSearch}/>
          {isLoading}
          {movies}
        </main>
        <Footer />
      </>
    );
  }
}

