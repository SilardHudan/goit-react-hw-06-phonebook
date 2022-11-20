import PropTypes from 'prop-types';
import { Contact, IconUser, Item, Button } from './ContactItem.styled';
import { RiDeleteBinLine } from 'react-icons/ri';
import { memo } from 'react';
import { useContacts } from 'hooks/useContacts';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ContactItem = ({ id, name, number }) => {
  const { removeContact } = useContacts();

  const handleRemoveContact = id => {
    removeContact(id);
    Notify.success(`Contact successfully removed`);
  };

  return (
    <Item>
      <Contact>
        <IconUser />
        {name} : {number}
      </Contact>
      <Button
        onClick={() => handleRemoveContact(id)}
        title="Delete"
        type="button"
      >
        <RiDeleteBinLine />
      </Button>
    </Item>
  );
};

export default memo(ContactItem);

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
