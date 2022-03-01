import { ArticleConteiner } from './App.styled';
import ContactForm from '../ContactForm';
import Filter from '../ContactsFilter';
import ContactList from '../ContactList';

export default function App () {
    return (
      <ArticleConteiner>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </ArticleConteiner>
    );
}
