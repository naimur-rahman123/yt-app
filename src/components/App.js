import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

export default class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('zyan malik');
  }

  onTermSubmit = async term => {
    const res = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState(() => ({
      videos: res.data.items,
      selectedVideo: res.data.items[0],
    }));
  };

  onVideoSelect = video => {
    this.setState(() => ({ selectedVideo: video }));
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
