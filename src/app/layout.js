import "../index.css";
import "../App.scss";

export const metadata = {
  title: "Developer Portfolio",
  description: "A beautiful portfolio template for developers"
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
