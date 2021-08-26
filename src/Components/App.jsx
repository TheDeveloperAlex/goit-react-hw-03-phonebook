import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import Contacts from "./Contacts/Contacts";
import s from "../Components/app.module.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  formSubmit = (data) =>
    this.setState((prevState) => ({ contacts: [...prevState.contacts, data] }));

  removeContact = (e) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== e.target.id
      ),
    }));
  };

  validate = (dataUser) => {
    const res = this.state.contacts.filter(
      (item) => item.name === dataUser.name
    );
    let isValid = true;
    const notValid = () => {
      isValid = false;
    };
    res.length > 0 && alert(`Eror, ${dataUser.name} is already in contacts`);
    res.length > 0 && notValid();
    return isValid;
  };

  filter = (e) => {
    const value = e.target.value;
    this.setState({ filter: value });
  };

  componentDidMount() {
    // console.log("componentDidMount");
    const contacts = localStorage.getItem("contacts");
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) this.setState({ contacts: parseContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div className={s.section}>
        <h1>PhoneBook</h1>

        <ContactForm formSubmit={this.formSubmit} validate={this.validate} />
        <Contacts
          contacts={this.state.contacts}
          filter={this.state.filter}
          fnFilter={this.filter}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
