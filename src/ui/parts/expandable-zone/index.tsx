import type { ReactNode } from 'react';

import * as styles from './styles.module.scss';

interface Props {
  expanded: boolean;
  children: ReactNode;
}

export default function ExpandableZone(props: Props) {
  const { expanded, children } = props;

  return (
    <div
      className={styles.root}
      data-expanded={expanded}
      aria-hidden={!expanded}
    >
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
