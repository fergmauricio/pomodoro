import { useState, useEffect } from 'react';
import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { sortTasks, type SortTasksOptions } from '../../utils/sortTasks';
import { TaskActionsTypes } from '../../contexts/TaskContext/taskActions';

export function History() {
  const { state, dispatch } = useTaskContext();
  const hasTasks = state.tasks.length > 0;

  useEffect(() => {
    document.title = 'Histórico - Chronus Pomodoro';
  }, []);

  const taskTypeDictionary = {
    workTime: 'Foco',
    shortBreakTime: 'Descanso curto',
    longBreakTime: 'Descanso longo',
  };

  const [sortTaskOptions, setSortTaskOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({
          tasks: state.tasks,
          field: 'startDate',
          direction: 'desc',
        }),
      };
    },
  );

  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    const newDirection = sortTaskOptions.direction === 'desc' ? 'asc' : 'desc';

    setSortTaskOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTaskOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    });
  }

  function handleResetHistory() {
    if (!confirm('Tem certeza?')) return;
    dispatch({ type: TaskActionsTypes.RESET_STATE });
  }

  useEffect(() => {
    setSortTaskOptions(prevState => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      }),
    }));
  }, [state.tasks]);

  return (
    <>
      <MainTemplate>
        <Container>
          <Heading>
            <span>History</span>
            {hasTasks && (
              <span className={styles.buttonContainer}>
                <DefaultButton
                  icon={<TrashIcon />}
                  color='red'
                  aria-label='Apagar Todo Histórico'
                  title='Apagar Todo Histórico'
                  onClick={handleResetHistory}
                />
              </span>
            )}
          </Heading>
        </Container>
        <Container>
          {hasTasks && (
            <div className={styles.responsiveTable}>
              <table>
                <thead>
                  <tr>
                    <th
                      className={styles.thSort}
                      onClick={() => handleSortTasks({ field: 'name' })}
                    >
                      Tarefa
                    </th>
                    <th
                      className={styles.thSort}
                      onClick={() => handleSortTasks({ field: 'duration' })}
                    >
                      Duração
                    </th>
                    <th
                      className={styles.thSort}
                      onClick={() => handleSortTasks({ field: 'startDate' })}
                    >
                      Data
                    </th>
                    <th>Status</th>
                    <th>Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  {sortTaskOptions.tasks.map(task => {
                    return (
                      <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>{task.duration}min</td>
                        <td>{formatDate(task.startDate)}</td>
                        <td>{getTaskStatus(task, state.activeTask)}</td>
                        <td>{taskTypeDictionary[task.type]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          {!hasTasks && (
            <p style={{ textAlign: 'center' }}>
              Ainda não existem tarefas criadas
            </p>
          )}
        </Container>
      </MainTemplate>
    </>
  );
}
