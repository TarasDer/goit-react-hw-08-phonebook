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
    <div className={css.form}>
      <h2 className={css.title}>Contacts</h2>

      <label>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
}
