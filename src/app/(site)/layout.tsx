import Nav from "@/_components/Nav";

// Pages in this route group get the site navigation; the root not-found page sits outside it, so it has none.
// Nav wraps the page so its phone menu can sit above the page content and make it inert while open.
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Nav>{children}</Nav>;
}
