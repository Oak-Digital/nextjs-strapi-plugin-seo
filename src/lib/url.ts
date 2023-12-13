export const getStrapiUrl = (strapiUrl: string, path: string) => {
    // remove trailing slash
    const url = strapiUrl.replace(/\/+$/, '');
    // remove leading slash from path
    const newPath = path.replace(/^\/+/, '');
    return `${url}/${newPath}`;
};

export const getImageUrl = (imageUrl: string, strapiUrl: string) => {
    if (imageUrl.startsWith('/')) {
        return getStrapiUrl(strapiUrl, imageUrl);
    }

    return imageUrl;
};
