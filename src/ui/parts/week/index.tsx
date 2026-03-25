import * as styles from './styles.module.scss';

interface Props {
  label: number;
  selected: boolean;
  onSelect: () => void;
}

export default function Week(props: Props) {
  const { label, selected, onSelect } = props;

  return (
    <button
      type="button"
      className={styles.root}
      data-selected={selected}
      onClick={onSelect}
    >
      W{label}
    </button>
  );
}
