// import PropTypes from 'prop-types';
import { filterContacts } from "../../redux/sliceContacts";
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatchFilter = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const handlerFilterName = e => {dispatchFilter(filterContacts(e.target.value))};
  return  (<label>
    Find contacts by name
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={handlerFilterName}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    />
  </label>)
  }

export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
