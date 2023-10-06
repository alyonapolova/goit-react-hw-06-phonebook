import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'task',
  initialState: { contacts: [] },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
      // const index = state.contacts.findIndex(el => el.id === action.payload);
      // state.contacts.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = taskSlice.actions;
export default taskSlice;
