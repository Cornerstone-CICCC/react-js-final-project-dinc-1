import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full border-t-2 border-black bg-white px-4 py-4 text-sm flex justify-between items-center md:items-end md:static md:gap-10 md:py-6 md:flex-row">
      <p className="uppercase text-muted-foreground text-sm">
        &copy; {new Date().getFullYear()} DINCT. All rights reserved.
      </p>
      <nav>
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
