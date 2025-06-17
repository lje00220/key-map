import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Sidebar from '@/components/Sidebar';
import './globals.css';

const nexonGothic = localFont({
  src: [
    {
      path: '/fonts/NEXONLv1GothicBold.ttf',
      weight: '700',
    },
    {
      path: '/fonts/NEXONLv1GothicRegular.ttf',
      weight: '400',
    },
    {
      path: '/fonts/NEXONLv1GothicLight.ttf',
      weight: '300',
    },
  ],
  variable: '--font-nexon-gothic',
});

export const metadata: Metadata = {
  title: '키맵',
  description: '소프트웨어의 단축키를 한눈에 확인 할 수 있는 키맵',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body className={nexonGothic.className}>
        <main className="flex h-screen">
          <Sidebar />
          <div className="flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
