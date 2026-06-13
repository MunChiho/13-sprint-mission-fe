import "./globals.css";
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: "판다마켓",
  description: "판다마켓 중고 플랫폼",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
