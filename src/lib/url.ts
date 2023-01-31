export const getStrapiUrl = (strapiUrl: string, path: string) => {
    // remove trailing slash
    const url = strapiUrl.replace(/\/$/, '');
    return `${url}/${path}`;
};
