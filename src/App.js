import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form/Form";
import Contacts from "./components/Contacts/Contacts";
import Section from "./components/Section/Section";
import Filter from "./components/Filter/Filter";

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

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parcedContacts = JSON.parse(contacts);
    this.setState({ contacts: parcedContacts });
  }

  componentDidUpdate(pervProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  addContact = (name, number) => {
    const newContact = {
      name,
      id: uuidv4(),
      number,
    };

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedContacts = filter.toLowerCase();

    // const filteredContacts = contacts.filter((contact) =>
    //   contact.name.toLowerCase().includes(normalizedContacts)
    // );
    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.addContact} contacts={contacts} />
          <Filter value={filter} onChange={this.changeFilter} />
          <Contacts contacts={contacts} onDeleteContacts={this.deleteContact} />
        </Section>
      </>
    );
  }
}

export default App;
