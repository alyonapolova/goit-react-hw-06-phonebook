import Filter from 'components/Filter/Filter';
import { deleteContact } from 'components/reduxToolkit/taskSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  //console.log(contacts);
  const filter = useSelector(state => state.filter);

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
        <ul>
          {filteredContacts.map(el => (
            <li key={el.id}>
              {el.name}:{el.number}
              <button
                type="button"
                onClick={() => {
                  handleDelete(el.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
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
