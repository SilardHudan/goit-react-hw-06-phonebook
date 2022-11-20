import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },

    remove: (state, action) => {
      return {
        value: state.value.filter(({ id }) => id !== action.payload),
      };
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { add, remove } = contactsSlice.actions;
