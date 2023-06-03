import { Component } from 'react';

import { Container } from './App.styled';
import ImageGalery from './ImageGallery/ImageGallery';
import { SearchBar } from './SearchBar/SearcBar';

class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
  };

  handleSearchQuery = searchQuery => {
    this.setState({
      searchQuery,
    });
  };

  //  --------------------------------
  render() {
    const { searchQuery } = this.state;

    return (
      <Container>
        <SearchBar
          searchQuery={searchQuery}
          onSubmit={this.handleSearchQuery}
        />

        <ImageGalery searchQuery={searchQuery} />
      </Container>
    );
  }
}

export default App;
