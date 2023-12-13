'use client';

import { FC, useMemo } from 'react';
import { FALLBACK_URL, NETWORK_NAMES } from '../../lib/constants';
import { IMedia, ISharedMetaSocial } from '../../types/generated';
import MetaSocial from './MetaSocial';

type Props = {
    metaSocials?: ISharedMetaSocial[];
    strapiUrl?: string;
    fallbackImage?: IMedia;
};

const MetaSocials: FC<Props> = ({ metaSocials = [], strapiUrl = FALLBACK_URL, fallbackImage }) => {
    const networksToUseFallbackFor = useMemo(
        () =>
            NETWORK_NAMES.filter((network) => !metaSocials.some((metaSocial) => metaSocial.socialNetwork === network)),
        [metaSocials]
    );

    return (
        <>
            {fallbackImage &&
                networksToUseFallbackFor.map((network) => (
                    <MetaSocial
                        key={network}
                        metaSocial={{
                            socialNetwork: network,
                        }}
                        fallbackImage={fallbackImage}
                        strapiUrl={strapiUrl}
                    />
                ))}
            {metaSocials.map((metaSocial) => (
                <MetaSocial
                    key={metaSocial.id}
                    metaSocial={metaSocial}
                    strapiUrl={strapiUrl}
                    fallbackImage={fallbackImage}
                />
            ))}
        </>
    );
};

export default MetaSocials;
