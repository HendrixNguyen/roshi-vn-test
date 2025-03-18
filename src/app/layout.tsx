import "@/styles/globals.scss";
import cx from "classnames";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["vietnamese"],
  variable: "--nunito-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={process.env.NODE_ENV === "development"}>
      <body className={cx(nunitoSans.className, "antialiased")}>{children}</body>
    </html>
  );
}
