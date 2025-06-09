import { createContext, useContext, useEffect, useReducer } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskStateModel } from '../../models/TaskStateModel';
import { taskReducer } from './taskReducer';
import type { TaskActionModel } from './taskActions';

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

export const TaskContext = createContext<TaskContextProps>(
  {} as TaskContextProps,
);

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  useEffect(() => {
    console.log('state', state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
