import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./taskSlice";
import { filtersReducer } from "./filtersSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"
import { authReducer } from "./auth/silce";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const authPersistConfig  = {
  key: `auth`,
  storage,
  whitelist: ["token"]
}


export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig,authReducer),
    tasks: tasksReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:false
  })
});
export const persistor = persistStore(store);