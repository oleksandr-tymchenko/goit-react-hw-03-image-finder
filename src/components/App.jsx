import { Component } from 'react';
// import ContactForm from './ContactForm/ContactForm';

import { Container } from './App.styled';
// import Skeleton from './Skeleton/Skeleton';
// import { SearchBar } from './SearchBar/SearchBar';
// import { getImages } from 'servises/api';
import ImageGalery from './ImageGallery/ImageGallery';
// import { ImageGaleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { SearchBar } from './SearchBar/SearcBar';

// import { Formik, Form, Field, ErrorMessage } from 'formik';

class App extends Component {
  state = {
    searchQuery: '',

    // filter: '',
    // isLoading: false,
  };

  handleSearchQuery = searchQuery => {
    this.setState({
      searchQuery,
    });
  };
  // // /----------------------
  // async componentDidMount() {
  //   const { searchQuery } = this.state;
  //   const data = await getImages({ searchQuery });
  //   const images = data.hits;

  //   await this.setState({ images, isLoading: false });
  //   console.log(this.state);
  // }
  // componentDidUpdate(_, prevState) {
  //   if (prevState.searchQuery !== this.state.searchQuery) {
  //     console.log('update');
  //   }
  // }
  // -----------------------------

  // handleSubmit = (values, { resetForm }) => {
  //   const { contacts } = this.state;
  //   values.id = nanoid();

  //   if (this.existedContact({ contacts }, values)) {
  //     alert(`${values.name} is already in contacts`);
  //     return;
  //   }

  //   this.setState(prewState => ({
  //     contacts: [...contacts, values],
  //   }));

  //   resetForm();
  // };

  // onSearchValue = e => {
  //   this.setState({ filter: e.target.value });
  // };

  // deleteContact = contactId => {
  //   this.setState(prewState => ({
  //     contacts: prewState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  // getVisibleContacts = () => {
  //   const { contacts, filter } = this.state;
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  //  --------------------------------
  render() {
    const { searchQuery } = this.state;

    // const { filter } = this.state;

    // const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <SearchBar
          searchQuery={searchQuery}
          onSubmit={this.handleSearchQuery}
        />

        {/* <Skeleton /> */}
        <ImageGalery searchQuery={searchQuery} />

        {/* <Title1>Phonebook</Title1>
        <ContactForm data={this.handleSubmit} />
        <Title2>Contacts</Title2>
        <Filter value={filter} onSearch={this.onSearchValue} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        /> */}
      </Container>
    );
  }
}

export default App;
