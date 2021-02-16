import React, {useState} from 'react';

export default function Search(props) {
  const {onSearch = Function.prototype} = props;

  const [ value, setText] = useState('doctor');
  const [ type, setType] = useState('all');

  const handleChangeText = (e) => setText(e.target.value);
  const handleChangeRadio = (e) => setType(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(value, type);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group search-input-group">
        <input type="text"
                  className="form-control search-input"
                  placeholder="type to search" 
                  onChange={handleChangeText}
                  value={value}
                  />
        <button type="submit" className="btn btn-primary btn-search">Search</button>
      </div>
      <div className="form-check form-check-inline">
        <input 
          className="form-check-input" 
          type="radio" 
          value="all"
          onChange={handleChangeRadio}
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
          onChange={handleChangeRadio}
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
          onChange={handleChangeRadio}
          checked = {type === 'series'}
          />
        <label className="form-check-label">
          Only series 
        </label>
      </div>
    </form>
  )
}