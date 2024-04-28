'use client';

import { Footer } from 'flowbite-react';

export function DefaultFooter() {
  return (
    <Footer
      container
      className="rounded-none border-t shadow-sm dark:border-dark-800 dark:bg-gray-950"
    >
      <Footer.Copyright href="./" by="Musabbir Sagar™" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
