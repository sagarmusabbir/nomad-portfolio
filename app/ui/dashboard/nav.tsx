import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';

export default function Header() {
  return (
    <>
      <nav
        className="nav_dropshadow bg-purple flex flex-wrap items-center justify-between drop-shadow-xl"
        // style="background-color: #2F3030"
      >
        <div className="mr-56 flex flex-shrink-0 items-center self-stretch bg-gradient-to-b from-purple-500 to-purple-500/25 pr-40 text-white [clip-path:polygon(0_0,100%_0,calc(100%-theme(spacing.8))_100%,0_100%)]">
          <a className="font-coolvetica pl-3 text-4xl font-bold text-white">
            ZeroHero
          </a>
        </div>
        <div className="flex w-auto flex-grow items-center p-3">
          <div className="flex-grow text-xl/8 text-white">
            <a href="#" className="text-white-200 mr-4 inline-block">
              {' '}
              Dashboard{' '}
            </a>
            <a href="#" className="text-white-200 mr-4 inline-block">
              {' '}
              Games{' '}
            </a>
            <a href="#" className="text-white-200 mr-4 inline-block">
              {' '}
              Statistics{' '}
            </a>
          </div>
          <div className="pr-3">
            <button
              className="font-roboto bg-teal inline-flex items-center rounded-md border-0 px-7 py-3 text-sm font-bold text-black"
              //   style="background-color: #00F0FF"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
