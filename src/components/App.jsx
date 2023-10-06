import ContactList from './ContactList/ContactList';
import { ContactsDiv } from './ContactList/ContactList.styled';
import ContactForm from './Form/Form';
import { FormDiv } from './Form/Form.styled';

export const App = () => {
  return (
    <FormDiv>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactsDiv>
        <ContactList />
      </ContactsDiv>
    </FormDiv>
  );
};

// redux
// import ContactList from './ContactList/ContactList';
// import Form from './Form/Form';

// export const App = () => {
//   return (
//     <div>
//       <Form />
//       <ContactList />
//     </div>
//   );
// };
