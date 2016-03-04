import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; //use relative path for files we create
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
const API_KEY = 'AIzaSyDwKGn8tGa308hVeNjnVxzJXH2eQO5G16I';

// Create a new component. This component should produce some HTML
// const is an es6 piece of syntax
// const is similar to var
// const -> constant. It's never going to change
// App is a class
// it produces instances
class App extends Component{ // fat arrow is es6 syntax. Same as using 'function()'
   constructor(props){
       super(props);
       this.state = {
           videos:[],
           selectedVideo: null
       };
       this.videoSearch('surfboards');
   };

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            }); // same as this.setState({ videos: videos});
        });
    }

    render(){
       return (
           <div>
               <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
               <VideoDetail video={this.state.selectedVideo} />
               <VideoList
                   onVideoSelect={selectedVideo => this.setState({selectedVideo})} //pass the property onVideoSelect to video list
                   videos={this.state.videos} />
           </div>
       );// this is jsx. Looks like HTML but is really just javascript.
   }
};

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));