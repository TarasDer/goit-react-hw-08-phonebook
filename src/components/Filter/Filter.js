import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(addFilter(event.target.value));
  };
  return (
    <label>
      Find contacts by name
      <input
        className={css.contact_filter}
        type="text"
        name="filter"
        onChange={handleFilterChange}
      />
    </label>
  );
}
