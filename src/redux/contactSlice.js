import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, phone) {
        return {
          payload: {
            name,
            phone,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
  selectors: {
    selectContacts: state => state,
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const { selectContacts } = contactSlice.selectors;

export const contactSliceReducer = contactSlice.reducer;
