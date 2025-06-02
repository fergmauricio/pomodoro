import styles from './Heading.module.css';

type HeadingProp = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProp) {
  //const { children } = props; // o mesmo de cima
  return <h1 className={styles.heading}>{children}</h1>;
}
