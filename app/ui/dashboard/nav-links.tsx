'use client';
import {
  HomeIcon,
  DocumentDuplicateIcon,
  CommandLineIcon,
  ArchiveBoxIcon,
  UserIcon,
  CubeIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Terminal', href: '/terminal', icon: CommandLineIcon },
  {
    name: 'Posts',
    href: '/terminal/blogs',
    icon: ArchiveBoxIcon,
  },
  { name: 'About', href: '/terminal/about', icon: UserIcon },
  { name: 'Projects', href: '/terminal/projects', icon: CubeIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'order-transparent hover:border-px group my-1 flex h-[48px] grow items-center justify-start gap-2 rounded-md border border-transparent  p-3 text-sm font-medium text-gray-800 hover:border-gray-300 hover:bg-slate-200/50 hover:text-gray-900 hover:backdrop-blur-md dark:text-slate-100 hover:dark:border-slate-600 dark:hover:bg-slate-800/30 hover:dark:text-slate-50  md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-slate-200/50 text-gray-950 backdrop-blur-xl dark:bg-slate-800/30':
                  pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p>
              {link.name}{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </p>
          </Link>
        );
      })}
    </>
  );
}
