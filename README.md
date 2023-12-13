# Nextjs components for strapi-plugin-seo

This library provides Nextjs [`<Head>`](https://nextjs.org/docs/api-reference/next/head) components for [`strapi-plugin-seo`](https://github.com/strapi/strapi-plugin-seo).
This makes it easy to utilize `strapi-plugin-seo` without much to do in your frontend application.

## Getting started

### Installation

Install the library

```bash
# pnpm
pnpm install @oak-digital/nextjs-strapi-plugin-seo
# npm
npm install @oak-digital/nextjs-strapi-plugin-seo
# yarn
yarn add @oak-digital/nextjs-strapi-plugin-seo
```

### Usage - App router

In a `page.tsx` file you should use `generateMetadata` where you fetch the entry from strapi with the seo field populated. And then you can create the metadata with the `getMetadataFromSeo` function.

```tsx
import { getMetadataFromSeo } from '@oak-digital/nextjs-strapi-plugin-seo'

export async const generateMetadata = (props) => {
    // This should be your fetcher
    const page = await fetchPageWithSeo();

    const seoMetadata = getMetadataFromSeo({ seo: page.attributes.seo })

    return {
        ...seoMetadata
        // Here you can add any other fields that you may want on the meta data
    }
}
```

### Usage - Pages router

On your page that fetches the seo component you can simply import the `Seo` component and pass the data.
NOTE: It should not be wrapped in a [`next/head`](https://nextjs.org/docs/api-reference/next/head) component, this is done internally.

```tsx
import { Seo, SeoProps } from '@oak-digital/nextjs-strapi-plugin-seo'

type Props = {
    seo: SeoProps['seo'];
    pageProps: any;
};

const MyPage: NextPage<Props> = ({ seo }) => {
    return (
        <main>
            <Seo seo={seo} strapiUrl={'https://your-strapi-url.example:1337'} />
        </main>
    );
}
```

### Fetching

When fetching you may also want to populate the fields for seo, for this there is added a helper array with the fields that needs to be populated (`seoDeepPopulateFields `).
This can easily be used with [`qs`](https://github.com/ljharb/qs) or some other strapi client.

#### Example with `qs`

This example assumes that your seo component's name is seo from the content type, edit the populate seo to the one that you use.

```typescript
const query = qs.stringify({
    populate: {
        seo: {
            populate: seoDeepPopulateFields
        }
    }
})
```

## Testing locally

For testing purposes, there has been added an [`/example`](./example/) directory, where a strapi instance can be started and nextjs to make sure all the seo fields are correctly added.

[Read more](./example/README.md)

## Publishing

Publishing will happen automatically with github actions.
Just run `pnpm run release`
