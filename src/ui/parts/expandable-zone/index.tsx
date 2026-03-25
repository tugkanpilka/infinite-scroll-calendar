import type { ReactNode } from 'react';

import * as styles from './styles.module.scss';

interface Props {
  expanded: boolean;
  children: ReactNode;
}

export default function ExpandableZone(props: Props) {
  const { expanded, children } = props;

  return (
    <div className={styles.root} data-expanded={expanded}>
      {children}
    </div>
  );
}
