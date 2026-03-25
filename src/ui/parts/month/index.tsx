import * as styles from './styles.module.scss';

interface Props {
  label: string;
  selected: boolean;
  onSelect: () => void;
}

export default function Month(props: Props) {
  const { label, selected, onSelect } = props;

  return (
    <button
      type="button"
      className={styles.root}
      data-selected={selected}
      onClick={onSelect}
    >
      {label}
    </button>
  );
}
