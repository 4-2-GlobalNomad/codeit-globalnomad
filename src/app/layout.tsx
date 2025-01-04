// sort-imports-ignore
import '@/styles/reset.css';
import '@/styles/global.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import DynamicPortal from '@/components/dynamicportal/DynamicPortal';
import { Footer } from '@/components/footer/Footer';
import TanStackProvider from '@/providers/TanStackProvider';
import { Header } from '@/components/header/Header';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '400 700',
});

export const metadata: Metadata = {
  title: 'GlobalNomad 10기 PART4-2팀',
  description: '사용자가 판매자와 체험자 모두 될 수 있는 체험 상품을 예약하는 기능을 제공하는 서비스입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={pretendard.className}>
        <TanStackProvider>
          <DynamicPortal />
          <Header />
          {children}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
