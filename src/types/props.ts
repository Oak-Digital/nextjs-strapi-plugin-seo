import { IMedia, ISharedMetaSocial, ISharedSeo } from './generated';

export type SeoProps = {
    seo: Partial<ISharedSeo>;
    /**
     * The url to the strapi instace, should not include /api
     * @example http://localhost:1337
     */
    strapiUrl?: string;
};

type RequiredKeys = 'socialNetwork';

export interface MetaSocialProps {
    metaSocial: Pick<ISharedMetaSocial, RequiredKeys> & Partial<Omit<ISharedMetaSocial, RequiredKeys>>;
    strapiUrl: string;
    fallbackImage?: IMedia;
}
