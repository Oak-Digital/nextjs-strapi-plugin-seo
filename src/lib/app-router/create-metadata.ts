import type { Metadata } from 'next';
import { SeoProps } from '../../types';
import { IMedia, ISharedMetaSocial, ISharedSeo } from '../../types/generated';
import { FALLBACK_URL } from '../constants';
import { getMediaUrl } from '../url';

export const getMetadataFromMetaSocialTwitter = (
    metaSocial: ISharedMetaSocial,
    fallbackImage?: IMedia,
    strapiUrl: string = FALLBACK_URL
): Metadata => {
    const { title, image, description } = metaSocial;

    const imageToUse = image?.data ?? fallbackImage;

    return {
        twitter: {
            title: title ?? undefined,
            description: description ?? undefined,
            images: imageToUse && {
                url: getMediaUrl(imageToUse, strapiUrl),
                alt: imageToUse.attributes.alternativeText ?? undefined,
                width: imageToUse.attributes.width ?? undefined,
                height: imageToUse.attributes.height ?? undefined,
            },
        },
    };
};

export const getMetadataFromMetaSocialFacebook = (
    metaSocial: ISharedMetaSocial,
    fallbackImage?: IMedia,
    strapiUrl: string = FALLBACK_URL
): Metadata => {
    const { title, image, description } = metaSocial;

    const imageToUse = image?.data ?? fallbackImage;

    return {
        openGraph: {
            title: title ?? undefined,
            description: description ?? undefined,
            images: imageToUse && {
                url: getMediaUrl(imageToUse, strapiUrl),
                alt: imageToUse.attributes.alternativeText ?? undefined,
                width: imageToUse.attributes.width ?? undefined,
                height: imageToUse.attributes.height ?? undefined,
            },
        },
    };
};

export const getMetadataFromMetaSocial = (
    metaSocial: ISharedMetaSocial,
    fallbackImage?: IMedia,
    strapiUrl = FALLBACK_URL
): Metadata => {
    if (metaSocial.socialNetwork === 'Twitter') {
        return getMetadataFromMetaSocialTwitter(metaSocial, fallbackImage, strapiUrl);
    } else if (metaSocial.socialNetwork === 'Facebook') {
        return getMetadataFromMetaSocialFacebook(metaSocial, fallbackImage, strapiUrl);
    }

    return {};
};

export const getMetadataFromMetaSocials = (
    metaSocials: ISharedMetaSocial[],
    fallbackImage?: IMedia,
    strapiUrl = FALLBACK_URL
): Metadata => {
    return metaSocials.reduce(
        (acc, metaSocial) => ({
            ...acc,
            ...getMetadataFromMetaSocial(metaSocial, fallbackImage, strapiUrl),
        }),
        {}
    );
};

/**
 * Creates a metadata object from a strapi seo object
 */
export const getMetadataFromSeo = ({ seo, strapiUrl = FALLBACK_URL }: SeoProps): Metadata => {
    const { metaTitle, metaDescription, metaImage, keywords, metaSocial } = seo;

    const other: { title?: string } = {};

    if (metaTitle) {
        other['title'] = metaTitle;
    }

    return {
        ...getMetadataFromMetaSocials(metaSocial ?? [], metaImage?.data ?? undefined, strapiUrl),
        keywords,
        description: metaDescription,
        other,
    };
};
