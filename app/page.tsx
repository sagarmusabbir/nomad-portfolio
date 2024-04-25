import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { barlow, inter } from './ui/fonts';
import Header from './ui/dashboard/nav';
import Image from 'next/image';
import { Button } from 'flowbite-react/components/Button';

export default function Page() {
  return (
    <main className="bg-flate-50 flex min-h-screen flex-col p-6 dark:bg-gray-700">
      <div className="flex h-20 shrink-0 items-end rounded-lg border bg-slate-50 p-4 backdrop-blur-sm dark:border-gray-600  dark:bg-gray-700  md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg border bg-slate-50 px-6 py-10 backdrop-blur-sm dark:border-gray-600 dark:bg-gray-700 md:w-2/5 md:px-20">
          <p
            className={`${inter.className} text-lg text-gray-800 dark:text-white md:text-xl md:leading-normal`}
          >
            <strong>Musabbir Sagar</strong>
            <br />
            CEO of{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Third Bracket Solution
            </a>
          </p>
          <Button href="./terminal" color="light">
            Enter
            <ArrowRightIcon className="w-5" />
          </Button>
        </div>

        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </main>
  );
}
