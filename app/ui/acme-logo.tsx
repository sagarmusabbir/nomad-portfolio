import {
  CommandLineIcon,
  ArrowsPointingInIcon,
  HomeIcon,
  HomeModernIcon,
} from '@heroicons/react/24/outline';

import { barlow, inter } from './fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${barlow.className} flex flex-row items-center leading-none text-slate-700 dark:text-slate-100`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <CommandLineIcon className="h-12 w-12" />
      <p className="text-[44px]">MS</p>
    </div>
  );
}

export function Logo() {
  return (
    <div className={'flex flex-row items-center leading-none text-slate-700'}>
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <HomeIcon className="h-12 w-12" />
      <p className="text-[44px]">MS</p>
    </div>
  );
}
