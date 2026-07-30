# The Rabbit Cafe

Official website for [www.caferabbit.com](https://www.caferabbit.com/), built
with Next.js and deployed on Vercel.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

## Search indexing

The production site provides:

- A canonical URL for `https://www.caferabbit.com/`
- Indexable robots metadata
- `https://www.caferabbit.com/robots.txt`
- `https://www.caferabbit.com/sitemap.xml`
- `WebSite` structured data naming the site “The Rabbit Cafe”
- Open Graph and X/Twitter social preview metadata

After deployment, submit `https://www.caferabbit.com/sitemap.xml` in Google
Search Console and request indexing for `https://www.caferabbit.com/`.
