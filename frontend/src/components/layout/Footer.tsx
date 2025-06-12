import Link from 'next/link';
import { useScrollUpDown } from '@/hooks/useScrollUpDown';
import { cn } from '@/lib/utils';

const Footer = () => {
  const scrollDirection = useScrollUpDown();
  console.log(scrollDirection);
  return (
    <footer
      className={cn([
        'fixed bottom-0 left-0 w-full bg-white px-4 py-4 text-sm flex justify-between items-center transition duration-400 transform-[translateY(100)] md:items-end md:static md:gap-10 md:py-6 md:flex-row md:transform-none shadow-lg',
        scrollDirection === 'up'
          ? 'transform-[translateY(0)]'
          : 'transform-[translateY(100)]',
      ])}
    >
      <p className="uppercase text-muted-foreground text-sm">
        &copy; {new Date().getFullYear()} VANCART. All rights reserved.
      </p>
      <nav aria-label="Footer navigation">
        <ul className="flex flex-col gap-2 text-right">
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT US</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
