export const getStrapiUrl = (strapiUrl: string, path: string) => {
    // remove trailing slash
    const url = strapiUrl.replace(/\/+$/, '');
    // remove leading slash from path
    const newPath = path.replace(/^\/+/, '');
    return `${url}/${newPath}`;
};
