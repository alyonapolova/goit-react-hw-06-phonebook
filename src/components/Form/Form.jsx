import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { id: nanoid(), name, number };
    dispatch(addContact(newContact));
    // e.currentTarget.reset();
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        name="name"
        placeholder="Name"
        onChange={e => {
          setName(e.target.value);
        }}
      ></input>
      <input
        type="number"
        value={number}
        name="number"
        placeholder="Number"
        onChange={e => {
          setNumber(e.target.value);
        }}
      ></input>
      <button type="submit">Add contact</button>
    </form>
  );
};
export default Form;
