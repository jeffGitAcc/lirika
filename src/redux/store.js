import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCoreApi, shazamCoreApiTwo } from './services/shazamCore';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    [shazamCoreApiTwo.reducerPath]: shazamCoreApiTwo.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat((shazamCoreApi.middleware, shazamCoreApiTwo.middleware)),
});

