import AcmeLogo from '@/app/ui/acme-logo';
import { Home } from '@/app/ui/acme-logo';
import { ArrowRightIcon, HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { barlow, inter } from './ui/fonts';
import Header from './ui/dashboard/nav';
import Image from 'next/image';
import { Button } from 'flowbite-react/components/Button';
import { Breadcrumb } from 'flowbite-react';

export default function Page() {
  return (
    <main
      className="flex min-h-screen flex-col p-6 
    "
    >
      <div className="flex shrink-0 flex-col items-start gap-4 rounded-xl border p-4 shadow-sm dark:border-dark-800 dark:bg-gray-950 ">
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="#">
            <Home />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
          <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/kkk.svg"
            width={400}
            height={400}
            className="hidden dark:invert md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 rounded-lg border bg-gray-50 px-6 py-6 shadow-sm dark:border-dark-800 dark:bg-gray-950 md:w-2/5 md:px-20">
          <p
            className={`${inter.className} truncate text-lg text-gray-800 dark:text-white md:text-xl md:leading-normal`}
          >
            <strong>Musabbir Sagar</strong>
            <br />
            CEO of{' '}
            <a href="https://nextjs.org/learn/" className="text-primary-400">
              Third Bracket Solution
            </a>
          </p>
          <Button
            href="./terminal"
            className="border border-gray-300 bg-transparent  text-dark-800 hover:border-gray-400 hover:bg-light-200/50 focus:outline-none focus:ring focus:ring-slate-400  focus:ring-offset-0 dark:border-gray-800  dark:bg-transparent dark:text-slate-300 dark:hover:bg-dark-900/40"
          >
            Enter
            <ArrowRightIcon className="w-5" />
          </Button>
        </div>
      </div>
    </main>
  );
}
