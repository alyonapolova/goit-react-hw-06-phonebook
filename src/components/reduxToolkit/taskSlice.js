const { createSlice } = require('@reduxjs/toolkit');

const taskSlice = createSlice({
  name: 'task',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex(el => el.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
