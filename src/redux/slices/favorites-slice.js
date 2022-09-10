import { createSlice } from '@reduxjs/toolkit';

import { getLocalStorage, setLocalStorage } from '../../util';

const initialState = [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: !!getLocalStorage('favorites') ? getLocalStorage('favorites') : initialState,
  reducers: {
    setFavorites: (state, action) => {
      setLocalStorage('favorites', action.payload);
      return action.payload;
    },
  },
});

export const favorites = favoritesSlice.reducer;
export const { setFavorites } = favoritesSlice.actions;
