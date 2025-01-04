import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import stylesheet from "~/tailwind.css?url";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./sections/navbar/Navbar";
import Prefooter from "./sections/prefooter/Prefooter";
import Footer from "./sections/footer/Footer";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  {
    rel: "shortcut icon",
    type: "image/png",
    href: "/favicon.png"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Urbanist:wght@100..900&family=Water+Brush&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <LiveReload />
        <Navbar />
        {children}
        <Prefooter />
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
