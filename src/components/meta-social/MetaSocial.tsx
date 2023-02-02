import TwitterMeta from './Twitter';
import FacebookMeta from './Facebook';
import { FC } from 'react';
import { FALLBACK_URL } from '../../lib/constants';
import { MetaSocialProps } from '../../types/Props';

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
