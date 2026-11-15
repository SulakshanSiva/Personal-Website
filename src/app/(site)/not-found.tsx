import NotFound from "@/_components/NotFound";

// Shown when a page in this group calls notFound(), such as an unknown /projects/[project].
// Next.js doesn't fall back to the root not-found page from inside this group, so it needs its own.
// The height leaves room for the nav (about 5rem) so the page doesn't scroll.
export default function SiteNotFound() {
  return <NotFound className="min-h-[calc(100dvh-5rem)]" />;
}
