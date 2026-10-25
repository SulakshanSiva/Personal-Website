# Sulakshan Siva — Personal Website

A personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS. It has three pages: Home (introduction and about), Experience, and Projects.

## Navigation

`src/_components/Nav.tsx` renders the site navigation from its `pages` list; add an entry there when adding a page. Pages live in the `src/app/(site)` route group, whose layout renders the navigation; the 404 page (`src/app/not-found.tsx`) sits outside it, so it shows no navigation.

- On desktop, centered tabs sit at the top of every page and a highlight slides to the active page.
- On phones, a hamburger button in the top left opens a full-screen menu, and the theme toggle sits in the top right.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. To create a production build, run `npm run build`.

## Theme support

The site supports light and dark themes. It starts with the visitor's system preference, and the toggle (fixed in the bottom-right corner on desktop, in the header on phones) lets them switch modes. The selected theme is saved for future visits.

Theme behavior is shared across the app:

- `src/_components/ThemeProvider.tsx` applies the theme class and enables system preference detection through `next-themes`.
- `src/_components/ThemeToggle.tsx` provides the accessible theme switch.
- `src/app/globals.css` defines the light and dark color tokens. Update the token values there to change the site palette globally.

Use semantic Tailwind classes in new pages and components so they automatically follow the active theme:

```tsx
<section className="bg-background text-foreground">
  <div className="border border-border bg-surface">...</div>
</section>
```

Available tokens include `background`, `foreground`, `surface`, `surface-muted`, `muted`, `subtle`, `border`, `outline`, `accent`, `accent-hover`, `link`, and the control hover colors. Main text and outlines are black in light mode and white in dark mode.
