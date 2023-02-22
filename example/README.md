# nextjs-strapi-plugin-seo example

This directory is made to be able to test the library.

## Getting started

Install all dependencies in both projects and start the servers.

Strapi:

```
$ pnpm install
$ pnpm run build
$ pnpm run develop
```

After starting strapi, set up test pages with/without seo data

Nextjs:

```
$ pnpm install
$ pnpm run dev
```

After starting nextjs, you should now be able to access each page with their page id in the following format: `http://localhost:3000/page/1`, where `1` can be replaced with a page id.

## Generate types

The types for the example can be generated in the nextjs folder with `pnpm run types`.
