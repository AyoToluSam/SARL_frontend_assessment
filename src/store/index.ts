import { configureStore } from "@reduxjs/toolkit";
import rootReducer, { combineMiddlewares } from "./reducers/rootReducer";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
        ignoredPaths: [],
        warnAfter: 128,
      },
      immutableCheck: { warnAfter: 128 },
    }).concat(combineMiddlewares),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type ActionDispatch = typeof store.dispatch;

export default store;
