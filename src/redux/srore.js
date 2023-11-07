import { configureStore } from '@reduxjs/toolkit';
import { contactDetailsReducer } from './reducer';

export const store = configureStore({
  reducer: {
    contactDetails: contactDetailsReducer,
  },
});
