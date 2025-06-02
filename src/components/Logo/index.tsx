import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
  const { logo } = styles;
  return (
    <div className={logo}>
      <a href='#'>
        <TimerIcon />
        <span>Chronus</span>
      </a>
    </div>
  );
}
