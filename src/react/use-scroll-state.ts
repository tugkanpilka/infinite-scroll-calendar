import { useEffect, useMemo, useRef, useState } from 'react';

export function useScrollState(threshold = 8) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return undefined;

    const handleScroll = () => {
      setIsScrolled(node.scrollTop >= threshold);
    };

    handleScroll();
    node.addEventListener('scroll', handleScroll);

    return () => node.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return useMemo(
    () => ({
      ref,
      isScrolled,
    }),
    [isScrolled],
  );
}
