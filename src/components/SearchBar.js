import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    onTermSubmit(term);
  };

  return (
    <div className="search-bar ui segment" style={{ marginTop: '1rem' }}>
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field-dark">
          <label htmlFor="search-video">Search Videos</label>
          <input
            type="text"
            id="search-video"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
