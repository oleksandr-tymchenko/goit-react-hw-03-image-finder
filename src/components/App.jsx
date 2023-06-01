import { Component } from 'react';
// import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';

// import { Formik, Form, Field, ErrorMessage } from 'formik';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // /----------------------
  componentDidMount() {}
  componentDidUpdate(_, prevState) {}
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
    // const { filter } = this.state;

    // const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
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
