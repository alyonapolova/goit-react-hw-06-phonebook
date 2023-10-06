import Filter from 'components/Filter/Filter';
import { deleteContact } from 'reduxToolkit/taskSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonLi, ListLi, ListUl } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  //console.log(contacts);
  const filter = useSelector(state => state.filter.value);
  // console.log(useSelector(state => state.filter));
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <Filter />
      {filteredContacts.length > 0 ? (
        <ListUl>
          {filteredContacts.map(el => (
            <ListLi key={el.id}>
              {el.name}:{el.number}
              <ButtonLi
                type="button"
                onClick={() => {
                  handleDelete(el.id);
                }}
              >
                Delete
              </ButtonLi>
            </ListLi>
          ))}
        </ListUl>
      ) : (
        <p>No contacts.</p>
      )}
    </div>
  );
};
export default ContactList;

//redux
// import Filter from 'components/Filter/Filter';
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/actions';

// const ContactList = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(state => state.contacts);
//   //console.log(contacts);
//   const filter = useSelector(state => state.filter);

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   const handleDelete = id => {
//     dispatch(deleteContact(id));
//   };

//   return (
//     <div>
//       <Filter />
//       {filteredContacts.length > 0 ? (
//         <ul>
//           {filteredContacts.map(el => (
//             <li key={el.id}>
//               {el.name}:{el.number}
//               <button
//                 type="button"
//                 onClick={() => {
//                   handleDelete(el.id);
//                 }}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No contacts.</p>
//       )}
//     </div>
//   );
// };
// export default ContactList;
