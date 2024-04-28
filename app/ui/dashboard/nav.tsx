'use client';

import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { AtSymbolIcon } from '@heroicons/react/24/outline';
import AcmeLogo from '../acme-logo';
import { Button, DarkThemeToggle } from 'flowbite-react';
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import { barlow } from '../fonts';

export default function Header() {
  return (
    <header>
      <Navbar
        sticky-top="true"
        fluid
        className="dark:border-dark-800 border-b shadow-sm dark:bg-gray-950"
      >
        <Navbar.Brand href="./">
          <AcmeLogo />
        </Navbar.Brand>
        <div className="flex items-center gap-3 md:order-2 md:gap-2 lg:order-2">
          <DarkThemeToggle />
          {/* <Button outline gradientDuoTone="greenToBlue" href="#">
            Get started
          </Button> */}
          <Button color="light">
            Hire
            <AtSymbolIcon className="mr-2 h-5 w-5" />
            Upwork
          </Button>

          <Navbar.Toggle
            theme={{
              // icon: "h-5 w-5 shrink-0",
              base: 'inline-flex items-center rounded-lg p-2 text-sm text-gray-800 hover:border-gray-300 hover:bg-slate-200/50 hover:text-gray-900 hover:backdrop-blur-md dark:text-slate-100 hover:dark:border-slate-600 dark:hover:bg-slate-800/30 hover:dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-gray-900  md:hidden',
            }}
          />
        </div>
        <Navbar.Collapse
          theme={{
            list: 'mt-4 flex flex-col lg:mt-0 lg:flex-row md:flex-row md:mt-0 md:space-x-4 lg:space-x-8 lg:text-base lg:font-medium md:text-[14px] md:font-normal',
            // base: "w-full md:block md:w-auto ",
          }}
          className="md:order-1 lg:order-1"
        >
          {/* <Navbar.Link
            theme={{
              active: {
                on: 'bg-primary-700 text-white dark:text-white md:bg-transparent md:text-primary-700',
              },
            }}
            active
            href="#"
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
          <Navbar.Link href="#">Marketplace</Navbar.Link>

          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link href="#">Team</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link> */}
          <NavLinks />
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
