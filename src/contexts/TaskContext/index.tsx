import { createContext, useContext, useEffect, useState } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskStateModel } from '../../models/TaskStateModel';

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export const TaskContext = createContext<TaskContextProps>(
  {} as TaskContextProps,
);

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  useEffect(() => {
    console.log('state', state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
