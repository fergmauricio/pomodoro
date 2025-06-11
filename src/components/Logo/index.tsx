import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Logo() {
  const { logo } = styles;
  return (
    <div className={logo}>
      <RouterLink href='/'>
        <TimerIcon />
        <span>Chronus</span>
      </RouterLink>
    </div>
  );
}
