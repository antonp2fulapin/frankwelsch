import '../../styles/globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

/**
 * Root layout for the Frank Welsch legal information website.
 *
 * This layout wraps all pages in the `(site)` route group. It defines
 * default metadata and sets up a base HTML structure. Global CSS is
 * imported here to ensure it is applied to all pages.
 */

export const metadata: Metadata = {
  title: {
    default: 'Insolvenz und Recht – Frank Welsch',
    template: '%s | Insolvenz und Recht – Frank Welsch',
  },
  description:
    'Aktuelle Informationen zu Insolvenzverfahren, Dienstleistungen und Rechtsthemen. Bereitgestellt von Frank Welsch und seinem Team.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    locale: 'de_DE',
    type: 'website',
    title: 'Insolvenz und Recht – Frank Welsch',
    description:
      'Aktuelle Informationen zu Insolvenzverfahren, Dienstleistungen und Rechtsthemen. Bereitgestellt von Frank Welsch und seinem Team.',
    siteName: 'Insolvenz und Recht – Frank Welsch',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insolvenz und Recht – Frank Welsch',
    description:
      'Aktuelle Informationen zu Insolvenzverfahren, Dienstleistungen und Rechtsthemen. Bereitgestellt von Frank Welsch und seinem Team.',
  },
};

export default function RootLayout({
  children,
}: {
  /** The page content to be rendered within the layout */
  children: ReactNode;
}) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
