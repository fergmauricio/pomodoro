import styles from './styles.module.css';

export function CountDown() {
  const { container } = styles;
  return <div className={container}>00:00</div>;
}
