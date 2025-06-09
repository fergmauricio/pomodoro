import { useTaskContext } from '../../contexts/TaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();

  const cycleDescriptionMap = {
    workTime: 'Foco',
    shortBreakTime: 'Descanso curto',
    longBreakTime: 'Descanso longo',
  };

  function printCycleDot() {
    return Array.from({ length: state.currentCycle }).map((_, index) => {
      const nextCycle = getNextCycle(index);
      const nextCycleType = getNextCycleType(nextCycle);
      return (
        <span
          key={index}
          aria-label={`${cycleDescriptionMap[nextCycleType]}`}
          className={`${styles.cycleDot} ${styles[nextCycleType]}`}
        />
      );
    });
  }

  return (
    <div className={styles.cycles}>
      <span>Ciclos: </span>
      <div className={styles.cycleDots}>{printCycleDot()}</div>
    </div>
  );
}
