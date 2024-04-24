import React from 'react';

import { GlobalData } from '../lib/types';

import SiteLogo from './logos/Sitelogo';

export default function Header({ name }: { name: GlobalData }): JSX.Element {
  return (
    <>
      <SiteLogo siteData={name} />
    </>
  );
}
