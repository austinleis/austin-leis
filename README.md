# Austin Leis

Homepage for the Austin Leis interior design studio. Next.js, statically exported.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Static export to `out/`. On Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `out`

## Images

`next/image` optimization is unavailable in a static export, so `public/` holds
pre-sized copies that are committed and served as-is.

Full-resolution originals live in `source-images/`, which is **not** in the repo.
To change the photography, restore that directory with the same
`source-images/<project>/<file>.jpg` layout as `public/`, update
`app/data/tiles.ts`, then run:

```bash
npm run images
```

That resizes each file to the widest size its tile is ever displayed at and
writes it into `public/` at the same path.
