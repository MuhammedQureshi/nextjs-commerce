import CartModal from 'components/cart/modal';
import { getMenu } from 'lib/shopify';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  const links = [
    { label: 'Courses', href: '/courses' },
    { label: 'E-Books', href: '/ebooks' },
    { label: 'Meet Abdeen', href: '/meet-abdeen' },
    { label: 'Donate', href: '/donate' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="z-50 fixed top-4 w-full px-4 sm:px-8">
      <div className="flex items-center justify-between mx-auto max-w-5xl bg-green-900/20 backdrop-blur-xl border border-purple-500/10 rounded-full px-6 py-3">
        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" prefetch className="flex items-center text-lg md:text-2xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-l from-[#FFD050] to-[#00966F]">
            Abdeens <span className="text-white ml-1">Academy</span>
          </Link>
        </div>

        {/* Links (Desktop Only) */}
        <ul className="hidden lg:flex items-center gap-6 flex-1 justify-center">
          {links.map((item) => (
            <li key={item.label} className="whitespace-nowrap">
              <Link
                href={item.href}
                prefetch
                className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-neutral-300 underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search and Cart */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:block">
            <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>
          </div>
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
