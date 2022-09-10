import { configureStore } from '@reduxjs/toolkit';

import { people } from './slices/people-slice';
import { favorites } from './slices/favorites-slice';

const store = configureStore({
  reducer: { people, favorites },
});

export default store;
