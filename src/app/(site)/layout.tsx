import Nav from "@/_components/Nav";

// Pages in this route group get the site navigation; the root not-found page sits outside it, so it has none
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
