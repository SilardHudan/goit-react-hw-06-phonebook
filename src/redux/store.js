import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {
  persistedContactFormReducer,
  persistedContactsReducer,
  persistedFilterReducer,
} from './persist/presistReducer';

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: persistedFilterReducer,
    addContactForm: persistedContactFormReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
