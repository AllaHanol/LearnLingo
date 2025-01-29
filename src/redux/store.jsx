import { modalReducer } from "./modal.jsx";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { userReducer } from "./auth/slice.jsx";
import { teachersReducer } from "./teachers/slice.jsx";

export const store = configureStore({
  reducer: {
    user: userReducer,
    teachers: teachersReducer,
    modal: modalReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

export const persistor =
  persistStore(store);
