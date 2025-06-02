import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  const { menu } = styles;
  return (
    <nav className={menu}>
      <a href='#'>
        <HouseIcon />
      </a>
      <a href='#'>
        <HistoryIcon />
      </a>
      <a href='#'>
        <SettingsIcon />
      </a>
      <a href='#'>
        <SunIcon />
      </a>
    </nav>
  );
}
