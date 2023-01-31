import TwitterMeta from './Twitter';
import FacebookMeta from './Facebook';
import { ISharedMetaSocial } from '../../types/generated';
import { FC } from 'react';
import { FALLBACK_URL } from '../../lib/constants';

export const metaSocialPopulateFields = ['image'] as const;

export type MetaSocialProps = {
    metaSocial: ISharedMetaSocial;
    strapiUrl?: string;
};

const MetaSocial: FC<MetaSocialProps> = ({ metaSocial, strapiUrl = FALLBACK_URL }) => {
    const network = metaSocial.socialNetwork;
    if (network === 'Facebook') {
        return <FacebookMeta strapiUrl={strapiUrl} metaSocial={metaSocial} />;
    } else if (network === 'Twitter') {
        return <TwitterMeta strapiUrl={strapiUrl} metaSocial={metaSocial} />;
    }

    return null;
};

export default MetaSocial;
