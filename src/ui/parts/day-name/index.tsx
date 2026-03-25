import * as styles from './styles.module.scss';

interface Props {
  label: string;
}

export default function DayName({ label }: Props) {
  return <span className={styles.root}>{label}</span>;
}
