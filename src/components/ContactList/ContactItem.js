// import PropTypes from 'prop-types';
import { ContactsListBtn, ContactsListItem } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { removeContacts } from "../../redux/sliceContacts";

const ContactItem = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.contacts.filter);

  const filterVisibleContacts = () => contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  const handlerDeleteContact = name => {dispatch(removeContacts(contacts.filter(contact => contact.name !== name)))};

    return (filterVisibleContacts().map(contact => (
    <ContactsListItem key={contact.id}>
      {contact.name}: {contact.number}
      <ContactsListBtn onClick={() => handlerDeleteContact(contact.name)}>
        Delete
      </ContactsListBtn>
    </ContactsListItem>
  )))}

export default ContactItem;

// ContactItem.propTypes = {
//   contactsItem: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
