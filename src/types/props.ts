import { IMedia, ISharedMetaSocial, ISharedSeo } from './generated';

export type SeoProps = {
    seo: ISharedSeo;
    strapiUrl?: string; // should not include /api
};

type RequiredKeys = 'socialNetwork';

export interface MetaSocialProps {
    metaSocial: Pick<ISharedMetaSocial, RequiredKeys> & Partial<Omit<ISharedMetaSocial, RequiredKeys>>;
    strapiUrl: string;
    fallbackImage?: IMedia;
}
