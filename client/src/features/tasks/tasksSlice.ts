import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  deadline: string;
}

interface TasksState {
  tasks: Task[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

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
