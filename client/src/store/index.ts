import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import tasksReducer from './features/tasks/slice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Clean type exports
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
