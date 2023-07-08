import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./taskSlice";
import { filtersReducer } from "./filtersSlice";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import { authReducer } from "./auth/silce";

const authPersistConfig  = {
  key: "auth",
  storage,
  whiteList: ["token"],
}
const middleware = {
  serializableCheck: {
    ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER ],
  }
}

export const store = configureStore({
  reducer: {
    auth: persistReducer({authPersistConfig},authReducer),
    tasks: tasksReducer,
    filters: filtersReducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(middleware)
});