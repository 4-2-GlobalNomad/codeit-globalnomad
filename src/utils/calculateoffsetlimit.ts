import { useEffect, useState } from 'react';

const useCalculateOffsetLimit = (pc: number, tab: number, mob: number) => {
  const [offset, setOffset] = useState<number>(() => {
    if (typeof window === 'undefined') {
      return pc;
    }
    if (window.innerWidth >= 1200) {
      return pc;
    }
    if (window.innerWidth >= 768 && window.innerWidth <= 1199) {
      return tab;
    }
    return mob;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setOffset(pc);
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1199) {
        setOffset(tab);
      } else {
        setOffset(mob);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [pc, tab, mob]);

  return offset;
};

export default useCalculateOffsetLimit;
