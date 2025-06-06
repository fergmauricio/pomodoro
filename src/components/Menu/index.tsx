import {
  HouseIcon,
  HistoryIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const { menu } = styles;
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    return (localStorage.getItem('theme') as AvailableThemes) || 'dark';
  });

  const handleThemeChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setTheme(prevState => {
      return prevState == 'dark' ? setTheme('light') : setTheme('dark');
    });
  };

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={menu}>
      <a href='#' aria-label='Ir para a Home' title='Ir para a Home'>
        <HouseIcon />
      </a>
      <a href='#' aria-label='Ver Histórico' title='Ver Histórico'>
        <HistoryIcon />
      </a>
      <a href='#' aria-label='Configurações' title='Configurações'>
        <SettingsIcon />
      </a>
      <a
        href='#'
        aria-label='Mudar Tema'
        title='Mudar Tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
