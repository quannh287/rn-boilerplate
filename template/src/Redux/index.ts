import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

import { reduxPersistStorage } from '@Storage/index';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/src/getDefaultMiddleware';
import { allReducer } from '@Redux/allReducers';
import { api } from '@Network/api';

const persistConfig = {
  key: 'root',
  storage: reduxPersistStorage,
};

const persistedReducer = persistReducer(persistConfig, allReducer);

const devMode = __DEV__;

const middleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware) => {
  const middlewares = getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(api.middleware);

  if (__DEV__ && !process.env.JEST_WORKER_ID) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
  }

  return middlewares;
};

const store = configureStore({
  reducer: persistedReducer,
  devTools: devMode,
  middleware: middleware,
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };
