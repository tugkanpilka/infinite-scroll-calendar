import type { ReactNode } from 'react';

import * as styles from './styles.module.scss';

interface Props {
  expanded: boolean;
  className?: string;
  children: ReactNode;
}

export default function ExpandableZone(props: Props) {
  const { expanded, className, children } = props;

  return (
    <div
      className={[styles.root, className].filter(Boolean).join(' ')}
      data-expanded={expanded}
      aria-hidden={!expanded}
    >
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
