import NotFound from "@/_components/NotFound";

// Shown for addresses that match no page. It sits outside the (site) group, so it has no nav.
export default function RootNotFound() {
  return <NotFound className="min-h-screen" />;
}
