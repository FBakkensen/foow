import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TasksState } from '../../../types/task';

const initialState: TasksState = {
  tasks: [],
  status: 'idle',
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskAdded: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    taskToggled: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    tasksLoading: (state) => {
      state.status = 'loading';
    },
    tasksReceived: (state, action: PayloadAction<Task[]>) => {
      state.status = 'succeeded';
      state.tasks = action.payload;
    },
    tasksFailed: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const {
  taskAdded,
  taskToggled,
  tasksLoading,
  tasksReceived,
  tasksFailed,
} = tasksSlice.actions;
export default tasksSlice.reducer;
