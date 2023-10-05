import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { taskReducer } from './taskSlice';

const store = configureStore({
  reducer: { contacts: taskReducer, filter: filterReducer },
});

export default store;
