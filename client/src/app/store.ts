import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import tasksReducer from '../features/tasks/tasksSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
