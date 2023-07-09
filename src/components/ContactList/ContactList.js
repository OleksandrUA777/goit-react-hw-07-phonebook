import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/phoneBook/thunk';

export const ContactList = () => {
  const { filter, contacts } = useSelector(state => state);
  const filteredContacts = contacts.items.filter(contact =>
    contact.name.toUpperCase().includes(filter.toUpperCase().trim())
  );
  const dispatch = useDispatch();
  const onDelete = event => {
    const id = event.currentTarget.id;
    dispatch(deleteContactThunk(id));
  };
  // 102035418111;
  return (
    <>
      <ul>
        {filteredContacts.map(data => {
          return (
            <li key={data.id}>
              {data.name} : {data.phone}
              <button id={data.id} onClick={onDelete}>
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
