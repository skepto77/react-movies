import React from 'react';
import Header from './layout/Header'
import Footer from './layout/Footer'
import Main from './layout/Main'
import Service from './components/Service';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loadnig: true
    }
  }

  service = new Service();
  
  componentDidMount() {
    this.service.getDefaultMovies()
      .then((data => {
        this.setState({data})
      }));
  }

  render() {
    const { data} = this.state;
    return (
      <>
        <Header />
        <Main getData ={data}/>
        <Footer />
      </>
    );
  }
}

