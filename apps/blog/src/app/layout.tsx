// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>
        {/* 헤더 */}
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-2xl font-semibold">devzoe</h1>
          </div>
        </header>

        {/* 메인 콘텐츠 */}
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>

        {/* 푸터 */}
        <footer className="bg-gray-100">
          <div className="container mx-auto px-4 py-4 text-center">
            &copy; {new Date().getFullYear()} devzoe blog. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
