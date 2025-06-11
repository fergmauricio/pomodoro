import {
  HouseIcon,
  HistoryIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { RouterLink } from '../RouterLink';

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
      <RouterLink href='/' aria-label='Ir para a Home' title='Ir para a Home'>
        <HouseIcon />
      </RouterLink>
      <RouterLink
        href='/history/'
        aria-label='Ver Histórico'
        title='Ver Histórico'
      >
        <HistoryIcon />
      </RouterLink>
      <RouterLink
        href='/settings/'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </RouterLink>
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
