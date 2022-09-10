import { createSlice } from '@reduxjs/toolkit';

import { getLocalStorage, setLocalStorage } from '../../util';

const initialState = [];

const peopleSlice = createSlice({
  name: 'people',
  initialState: !!getLocalStorage('people') ? getLocalStorage('people') : initialState,
  reducers: {
    setPeople: (state, action) => {
      setLocalStorage('people', action.payload);
      return action.payload;
    },
  },
});

export const people = peopleSlice.reducer;
export const { setPeople } = peopleSlice.actions;
