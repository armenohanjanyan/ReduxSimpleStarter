import React, { Component } from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBhuUFKBARGQ1b1JrnLoXqnUgP2WbGXfNw';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

     this.videoSearch('surfboards');

  }

  videoSearch(word) {
    YTSearch({key: API_KEY, term: word}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    })
  }


  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 3000)

  return (<div>
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetails video={this.state.selectedVideo} />
            <VideoList
            onVideoSelect={video => this.setState({selectedVideo: video})}
            videos={ this.state.videos } />
        </div>
   );
 }
}

ReactDOM.render(<App />, document.querySelector('.container'));
