import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
import { addFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

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
