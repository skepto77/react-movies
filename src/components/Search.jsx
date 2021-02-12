import React from 'react';

export default class Search extends React.Component {
  state = {
    value: '',
    type: 'all',
    }

  handleChange = (e) => this.setState({value:e.target.value});
  handleChangeRadio = (e) => this.setState({type:e.target.value});

  handleSubmit = (e) => {
    e.preventDefault();
    const {value, type} = this.state;
    this.props.onSearch(value, type);
  }

  render() {
    const {value, type} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-0">
          <input type="text"
                    className="form-control search-input"
                    placeholder="type to search" 
                    onChange={this.handleChange}
                    value={value}
                    />
          <button type="submit" className="btn btn-primary" style={{height:'36px', margin:'auto 0'}}>Search</button>
        </div>
        <div className="form-check form-check-inline">
          <input 
            className="form-check-input" 
            type="radio" 
            value="all"
            onChange={this.handleChangeRadio}
            name="Radios"
            checked = {type === 'all'}
            />
          <label className="form-check-label">
            All
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input 
            className="form-check-input" 
            type="radio" 
            value="movie" 
            name="Radios" 
            onChange={this.handleChangeRadio}
            checked = {type === 'movie'}/>
          <label className="form-check-label">
            Only movies  
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" 
            type="radio" 
            value="series"  
            name="Radios"
            onChange={this.handleChangeRadio}
            checked = {type === 'series'}
            />
          <label className="form-check-label">
            Only series 
          </label>
        </div>
      </form>
    )
  };
}