import { add, remove } from '../redux/slice/contactSlice';
import { useSelector, useDispatch } from 'react-redux';

export const useContacts = () => {
  const contacts = useSelector(state => state.contacts.value);
  const dispatch = useDispatch();

  const addContact = contact => {
    dispatch(add(contact));
  };

  const removeContact = id => {
    dispatch(remove(id));
  };

  return { contacts, addContact, removeContact };
};
