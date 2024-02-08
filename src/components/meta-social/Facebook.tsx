import Head from 'next/head';
import { FC } from 'react';
import { getImageUrlFallback } from '../../lib/url';
import { MetaSocialProps } from '../../types';

type Props = MetaSocialProps;

const FacebookMeta: FC<Props> = ({ metaSocial, strapiUrl, fallbackImage }) => {
    const { title, description, image } = metaSocial;

    const selectedImageAttributes = image?.data?.attributes ?? fallbackImage?.attributes;

    return (
        <>
            <Head>
                {title && <meta property="og:title" content={title} />}
                {description && <meta property="og:description" content={description} />}
            </Head>
            {selectedImageAttributes && (
                <Head>
                    <meta property="og:image" content={getImageUrlFallback(selectedImageAttributes.url, strapiUrl)} />
                    {/* TODO: We should know if the image width and height are known since the media is an image */}
                    {selectedImageAttributes.width !== null && (
                        <meta property="og:image:width" content={selectedImageAttributes.width.toString()} />
                    )}
                    {selectedImageAttributes.height !== null && (
                        <meta property="og:image:height" content={selectedImageAttributes.height.toString()} />
                    )}
                    {selectedImageAttributes.alternativeText && (
                        <meta property="og:image:alt" content={selectedImageAttributes.alternativeText} />
                    )}
                </Head>
            )}
        </>
    );
};

export default FacebookMeta;
