'use client';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useIsMobile from '@/hooks/useIsMobile';
import { useLogout } from '@/hooks/useLogout';
import { cn } from '@/lib/utils';
import useUserStore from '@/stores/useUserStore';
import {
  HomeIcon,
  LogIn,
  LogOut,
  Logs,
  Plus,
  UserRound,
  ShoppingCart,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useCartStore from '@/stores/useCartStore';

const styles = {
  base: 'fixed z-50 flex items-center px-4',
  mobile:
    'justify-between py-4 shadow-2xs bg-white/70 border-1 bottom-22 rounded-4xl right-5 left-5',
  pc: 'md:justify-between md:top-0 md:py-2 md:w-full md:bg-white/90',
};

const Header = () => {
  const { user } = useUserStore();
  const { totalItems, setIsOpen } = useCartStore();
  const isMobile = useIsMobile();
  const [mounted, setMoundted] = useState(false);

  const { logout } = useLogout();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  useEffect(() => {
    setMoundted(true);
  }, []);

  if (!mounted || isMobile === null) return null;
  return (
    <>
      {isMobile ? (
        <header className={`${styles.base} ${styles.mobile}`}>
          <h1 className="font-bold">
            <Button
              asChild
              size={'icon'}
              variant={'secondary'}
              className="size-10 rounded-md px-0 py-0"
            >
              <Link href="/" className="flex flex-col gap-2">
                <HomeIcon />
                <span className="sr-only">VANCART</span>
              </Link>
            </Button>
          </h1>
          {user !== null ? (
            <>
              <Button
                asChild
                size={'icon'}
                variant={'secondary'}
                className="size-10 rounded-md px-0 py-0"
              >
                <Link href={`/work/new`}>
                  <Plus className="size-5" />
                </Link>
              </Button>
              <Button
                size={'icon'}
                variant={'secondary'}
                className="size-10 rounded-full px-0 py-0 relative"
                onClick={() => setIsOpen(true)}
              >
                <ShoppingCart className="size-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
                <span className="sr-only">Cart</span>
              </Button>
              <Button
                size={'icon'}
                className="size-10 rounded-full px-0 py-0"
                asChild
                variant={'secondary'}
              >
                <Link href={`/profile`}>
                  <Avatar className="flex items-center justify-center">
                    <AvatarImage
                      src={user.fileId || '/default-profile.png'}
                      className="object-cover"
                    />
                  </Avatar>
                  <span className="sr-only">Profile</span>
                </Link>
              </Button>
              <Button
                size={'icon'}
                className="size-10 rounded-md px-0 py-0"
                asChild
                variant={'secondary'}
              >
                <Link href={`/order-history`}>
                  <Logs />
                  <span className="sr-only">Order History</span>
                </Link>
              </Button>
              <Button
                size={'icon'}
                className="size-10 rounded-md px-0 py-0"
                asChild
                variant={'secondary'}
                onClick={handleLogout}
              >
                <span>
                  <LogOut />
                  <span className="sr-only">Logout</span>
                </span>
              </Button>
            </>
          ) : (
            <Button
              asChild
              size={'icon'}
              variant={'secondary'}
              className="size-10 rounded-md px-0 py-0"
            >
              <Link href={`/login`}>
                <LogIn className="size-5" />
              </Link>
            </Button>
          )}
        </header>
      ) : (
        <header className={`${styles.base} ${styles.pc}`}>
          <h1 className="font-bold">
            <Link href="/" className="flex flex-col gap-2">
              <span>VANCART</span>
            </Link>
          </h1>
          <div>
            <nav>
              <ul className="flex gap-3 items-center">
                {user !== null ? (
                  <>
                    <li>
                      <Button
                        asChild
                        size={'icon'}
                        variant={'outline'}
                        className="size-8 rounded-md px-0 py-0"
                      >
                        <Link href={`/work/new`}>
                          <Plus className="size-5" />
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button
                        size={'icon'}
                        variant={'outline'}
                        className="size-8 rounded-full px-0 py-0 relative cursor-pointer"
                        onClick={() => setIsOpen(true)}
                      >
                        <ShoppingCart className="size-4" />
                        {totalItems > 0 && (
                          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                            {totalItems > 9 ? '9+' : totalItems}
                          </span>
                        )}
                        <span className="sr-only">Cart</span>
                      </Button>
                    </li>
                    <li>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            size={'icon'}
                            className="bg-gray-300 size-8 rounded-md px-0 py-0 align-middle"
                          >
                            <Avatar
                              className={cn(
                                'flex items-center justify-center rounded-md',
                              )}
                            >
                              <AvatarImage
                                src={user.fileId || '/default-profile.png'}
                                className="object-cover"
                              />
                            </Avatar>
                            <span className="sr-only">Profile</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent sideOffset={6} align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/order-history`}>
                              <Logs />
                              <span>Order History</span>
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem asChild>
                            <Link href={`/profile`}>
                              <UserRound />
                              <span>Profile</span>
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={handleLogout}>
                            <LogOut />
                            <span>Logout</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </li>
                  </>
                ) : (
                  <li>
                    <Button
                      asChild
                      size={'icon'}
                      variant={'ghost'}
                      className="size-8 px-0 py-0"
                    >
                      <Link href={`/login`}>
                        <LogIn className="size-5" />
                      </Link>
                    </Button>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
