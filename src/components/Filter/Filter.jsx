import { setFilter } from 'reduxToolkit/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.value);

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterInput
      value={filter}
      onChange={handleFilter}
      name="filter"
      type="text"
      placeholder="Find contacts by name"
    ></FilterInput>
  );
};
export default Filter;
