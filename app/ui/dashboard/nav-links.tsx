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
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md border bg-slate-100 p-3 text-sm font-medium text-slate-700 backdrop-blur-md hover:bg-slate-50 hover:text-slate-900 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-slate-50 text-slate-950 backdrop-blur-xl':
                  pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
