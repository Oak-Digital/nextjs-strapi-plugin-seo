import { ISharedMetaSocial, ISharedSeo } from "./generated";

export type SeoProps = {
    seo: ISharedSeo;
    strapiUrl?: string; // should not include /api
};

export type MetaSocialProps = {
    metaSocial: ISharedMetaSocial;
    strapiUrl?: string;
};
