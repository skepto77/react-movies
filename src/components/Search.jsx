import React from 'react';

export default class Search extends React.Component {
  state = {
    value: '',
    }

  handleChange = (e) => this.setState({value:e.target.value});

  handleSubmit = (e) => {
    e.preventDefault();
    const {value} = this.state;
    this.props.onSearch(value);
  }

  render() {
    const {value} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
                  className="form-control search-input"
                  placeholder="type to search" 
                  onChange={this.handleChange}
                  value={value}
                  />
      </form>
    )
  };
}