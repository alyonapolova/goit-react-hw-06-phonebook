import { setFilter } from 'components/reduxToolkit/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      value={filter}
      onChange={handleFilter}
      name="filter"
      type="text"
      placeholder="Find contacts by name"
    ></input>
  );
};
export default Filter;

// redux
// import { useDispatch, useSelector } from 'react-redux';
// import { filterContact } from 'redux/actions';

// const Filter = () => {
//   const dispatch = useDispatch();
//   const filter = useSelector(state => state.filter);

//   const handleFilter = e => {
//     dispatch(filterContact(e.target.value));
//   };

//   return (
//     <input
//       value={filter}
//       onChange={handleFilter}
//       name="filter"
//       type="text"
//       placeholder="Find contacts by name"
//     ></input>
//   );
// };
// export default Filter;
