import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = { term: '' };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  onInputChange = e => {
    this.setState(() => ({ term: e.target.value }));
  };

  render() {
    return (
      <div className="ui segment" style={{ marginTop: '1rem' }}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field-dark">
            <label htmlFor="search-video">Search Videos</label>
            <input
              type="text"
              id="search-video"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
