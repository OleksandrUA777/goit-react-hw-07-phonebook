import { useDispatch, useSelector } from 'react-redux';
import { filterUpdate } from 'redux/phoneBook/phoneBookSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => state);

  const onInputChange = event => {
    dispatch(filterUpdate(event.currentTarget.value));
  };
  return (
    <label>
      Find contacts by name
      <input type="text" onChange={onInputChange} value={filter} />
    </label>
  );
};
