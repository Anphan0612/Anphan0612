import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Phan Quốc An | Backend Developer',
  description: 'Backend-focused developer in Ho Chi Minh City. Explore my Java/Spring Boot projects and personal .NET and Angular contributions during my HeraLabs internship.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
