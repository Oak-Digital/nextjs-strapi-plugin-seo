import { IMedia } from '../types/generated';

/**
 * Concatenates the strapiUrl and the path with only a single slash in between
 */
export const createStrapiUrl = (strapiUrl: string, path: string) => {
    // remove trailing slash
    const url = strapiUrl.replace(/\/+$/, '');
    // remove leading slash from path
    const newPath = path.replace(/^\/+/, '');
    return `${url}/${newPath}`;
};

/**
 * Returns the image url unless it starts with a slash
 * Then it will prepend the strapiUrl
 */
export const getImageUrlFallback = (imageUrl: string, strapiUrl: string) => {
    if (imageUrl.startsWith('/')) {
        return createStrapiUrl(strapiUrl, imageUrl);
    }

    return imageUrl;
};

export const getMediaUrl = (media: IMedia, strapiUrl: string) => {
    return getImageUrlFallback(media?.attributes?.url ?? '', strapiUrl);
};
