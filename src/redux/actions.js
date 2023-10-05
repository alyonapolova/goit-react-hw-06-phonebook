import { nanoid } from 'nanoid';

export const addContact = contact => ({
  type: 'task/ADD_CONTACT',
  payload: {
    contact,
    id: nanoid(),
  },
});
export const deleteContact = id => ({
  type: 'task/DELETE_CONTACT',
  payload: id,
});
export const filterContact = value => ({
  type: 'task/FILTER_CONTACT',
  payload: value,
});
