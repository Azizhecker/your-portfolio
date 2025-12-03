import "./globals.css";
import Navbar from "./components/Navbar";
import AosInit from "./components/AosInit";

export const metadata = {
  title: "Abdul Aziz Portfolio",
  description: "Portfolio Profesional Abdul Aziz, S.Kom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gray-50">
        <AosInit /> {/* ini component client */}
        <Navbar /> {/* navbar tetap */}
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
