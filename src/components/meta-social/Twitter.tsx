import Head from 'next/head';
import { FC } from 'react';
import { getImageUrl } from '../../lib/url';
import { MetaSocialProps } from '../../types';

type Props = MetaSocialProps;

const TwitterMeta: FC<Props> = ({ strapiUrl, metaSocial, fallbackImage }) => {
    const { title, description, image } = metaSocial;
    const selectedImageAttributes = image?.data?.attributes ?? fallbackImage?.attributes;

    return (
        <Head>
            {title && <meta name="twitter:title" content={title} />}
            {selectedImageAttributes?.url && (
                <meta name="twitter:image" content={getImageUrl(selectedImageAttributes.url, strapiUrl)} />
            )}
            {description && <meta name="twitter:description" content={description} />}
        </Head>
    );
};

export default TwitterMeta;
