import { useState, useRef } from 'react';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { useTaskContext } from '../../contexts/TaskContext';
import type { TaskModel } from '../../models/TaskModel';

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: 'workTime',
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: 1,
        secondsRemaining,
        formattedSecondsRemaining: '00:00',
        tasks: [...prevState.tasks, newTask],
      };
    });
    //console.log(taskName);
  }
  return (
    <form className='form' action='' onSubmit={handleNewTask}>
      <div className='formRow'>
        <DefaultInput
          id='meuInput'
          type='text'
          labelText='Qualquer Coisa'
          placeholder='Digite algo'
          ref={taskNameInput}
        />
      </div>
      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
        <DefaultButton icon={<StopCircleIcon />} color='red' />
      </div>
    </form>
  );
}
