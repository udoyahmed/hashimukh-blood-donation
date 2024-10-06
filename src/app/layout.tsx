import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: 'Hashimukh Blood Donation',
  description: 'A platform for blood donation organized by Hashimukh Foundation.',
  openGraph: {
    title: 'Hashimukh Blood Donation Cell',
    description: 'Help save lives by donating blood through the Hashimukh Blood Donation platform.',
    url: 'https://hashimukh-blood-donation.vercel.app/',
    images: [
      {
        url: 'https://hashimukhstorage.blob.core.windows.net/public/company_logo_dark_compact.svg',
        width: 800,
        height: 600,
        alt: 'Blood donation campaign',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
