import Head from 'next/head';
import { FC } from 'react';
import { getImageUrlFallback } from '../../lib/url';
import { MetaSocialProps } from '../../types';

type Props = MetaSocialProps;

const TwitterMeta: FC<Props> = ({ strapiUrl, metaSocial, fallbackImage }) => {
    const { title, description, image } = metaSocial;
    const selectedImageAttributes = image?.data?.attributes ?? fallbackImage?.attributes;

    return (
        <Head>
            {title && <meta property="twitter:title" name="twitter:title" content={title} />}
            {selectedImageAttributes?.url && (
                <meta property="twitter:image" name="twitter:image" content={getImageUrlFallback(selectedImageAttributes.url, strapiUrl)} />
            )}
            {description && <meta property="twitter:description" name="twitter:description" content={description} />}
        </Head>
    );
};

export default TwitterMeta;
