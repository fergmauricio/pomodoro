import { useContext } from 'react';
import { useTaskContext } from '../../contexts/TaskContext';
import styles from './styles.module.css';

export function CountDown() {
  const { container } = styles;
  const { state } = useTaskContext();
  return <div className={container}>{state.formattedSecondsRemaining}</div>;
}
