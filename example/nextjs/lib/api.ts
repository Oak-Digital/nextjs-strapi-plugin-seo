import { IPage } from './types/generated';
import qs from 'qs';
import { seoDeepPopulateFields } from '@oak-digital/nextjs-strapi-plugin-seo';

export const fetchPage = async (pageId: number) => {
    const queryString = qs.stringify({
        populate: {
            seo: {
                populate: seoDeepPopulateFields,
            },
        },
    });
    // Good enough for demo purposes
    const data: { data: IPage } = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/api/pages/${pageId}?${queryString}`).then(
        (res) => res.json()
    );
    return data;
};
