import * as styles from './styles.module.scss';

interface Props {
  label: number;
  selected: boolean;
  today: boolean;
  outside: boolean;
  onSelect: () => void;
}

export default function Day(props: Props) {
  const { label, selected, today, outside, onSelect } = props;

  return (
    <button
      type="button"
      className={styles.root}
      data-selected={selected}
      data-today={today}
      data-outside={outside}
      onClick={onSelect}
    >
      {label}
    </button>
  );
}
