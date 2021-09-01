import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormWrap, Label, Input, Button } from "./Form.styled";

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  onInputHandler = (e) => {
    const key = e.target.name;
    this.setState({ [key]: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;

    const sameContact = this.props.contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (sameContact) {
      alert(`${name} is already in contacts`);
      this.setState({ name: "", number: "" });
      return;
    }

    this.props.onSubmit(name, number);

    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <FormWrap onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onInputHandler}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </Label>
        <Label>
          Phone
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.onInputHandler}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormWrap>
    );
  }
}

export default Form;
