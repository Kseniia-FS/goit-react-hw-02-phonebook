import React from "react";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { GiAlliedStar } from "react-icons/gi";
import { ImArrowRight2 } from "react-icons/im";
import { BsTrash } from "react-icons/bs";
import { ContactList, Item, Title, Button } from "./Contacts.styled";

function Contacts({ contacts, onDeleteContacts }) {
  return (
    <ContactList>
      <Title>Contacts</Title>
      {contacts.map(({ name, id, number }) => (
        <Item key={id} id={id}>
          <IconContext.Provider value={{ color: "#05a327", size: "30px" }}>
            <span>
              <GiAlliedStar />
            </span>
          </IconContext.Provider>
          {name}:
          <IconContext.Provider value={{ color: "#05a327", size: "15px" }}>
            <span>
              <ImArrowRight2 />
            </span>
          </IconContext.Provider>
          {number}
          <Button type="button" onClick={() => onDeleteContacts(id)}>
            <IconContext.Provider
              value={{
                color: "#e6082d",
                size: "20px",
              }}
            >
              <span>
                <BsTrash />
              </span>
            </IconContext.Provider>
          </Button>
        </Item>
      ))}
    </ContactList>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array,
  onDeleteContacts: PropTypes.func.isRequired,
};

export default Contacts;
