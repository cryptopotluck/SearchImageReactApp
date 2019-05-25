import React from 'react';
import unsplash from './api/unsplash'
import SearchBar from "./componenets/SearchBar";
import ImageList from "./componenets/ImageList";

class App extends React.Component {
    state ={images: []};

   handleSearchSubmit = async (term) => {
      const response = await
    unsplash.get('https://api.unsplash.com/search/photos', {
        params: {query: term},
    });
        this.setState({images: response.data.results})
  };


  render() {
    return (
        <div className="ui container" style={{marginTop: '10px'}}>
          <SearchBar onSubmit={this.handleSearchSubmit}/>
          <ImageList images={this.state.images}/>
        </div>
    );
  }
}

export default App;
