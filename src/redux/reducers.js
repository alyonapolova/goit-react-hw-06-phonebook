const initialState = {
  contacts: [],
  filter: '',
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'task/ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload.contact],
      };
    case 'task/DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case 'task/FILTER_CONTACT':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default contactReducer;
