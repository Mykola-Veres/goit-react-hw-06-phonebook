import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm, ContactsFormBtn } from './ContactForm.styled';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {addContacts, filterContacts } from "../../redux/sliceContacts";

export default function ContactForm () {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handlerChangeName = e => {
    switch (e.target.name){
      case "name":
        return setName(e.target.value)
      case "number":
        return setNumber(e.target.value)
      default:
        throw new Error();
    }
  }

  const handlerSubmitUser = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    handlerSubmitUserForm(contact)
    resetName();
  };

  const handlerSubmitUserForm = contact => {
    contacts.some(contactItem =>
        contactItem.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase())
      ? alert(`${contact.name} is already in contacts`)
      : dispatch(addContacts(contact))
    resetFilter()
  };

  const resetFilter = () => {dispatch(filterContacts(""))}

  const resetName = () => {
    setName("");
    setNumber('');
  };

    return (
      <ContactsForm onSubmit={handlerSubmitUser}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handlerChangeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handlerChangeName}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <ContactsFormBtn type="submit">Add contact</ContactsFormBtn>
      </ContactsForm>
    );
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
