import { useEffect, useState } from 'react';

export const useScrollUpDown = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');

  useEffect(() => {
    let scrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      // if (currentScrollY > scrollY) return;

      setScrollDirection(currentScrollY > scrollY ? 'down' : 'up');
      scrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, []);

  return scrollDirection;
};
