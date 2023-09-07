import Head from 'next/head';
import { FC } from 'react';
import { getStrapiUrl } from '../../lib/url';
import { MetaSocialProps } from '../../types';

type Props = MetaSocialProps;

const FacebookMeta: FC<Props> = ({ metaSocial, strapiUrl, fallbackImage }) => {
    const { title, description, image } = metaSocial;

    const selectedImageAttributes = image?.data?.attributes ?? fallbackImage?.attributes;

    return (
        <>
            <Head>
                {title && <meta name="og:title" content={title} />}
                {description && <meta name="og:description" content={description} />}
            </Head>
            {selectedImageAttributes && (
                <Head>
                    <meta name="og:image" content={getStrapiUrl(strapiUrl, selectedImageAttributes.url)} />
                    {/* TODO: We should know if the image width and height are known since the media is an image */}
                    {selectedImageAttributes.width !== null && (
                        <meta name="og:image:width" content={selectedImageAttributes.width.toString()} />
                    )}
                    {selectedImageAttributes.height !== null && (
                        <meta name="og:image:height" content={selectedImageAttributes.height.toString()} />
                    )}
                    {selectedImageAttributes.alternativeText && (
                        <meta name="og:image:alt" content={selectedImageAttributes.alternativeText} />
                    )}
                </Head>
            )}
        </>
    );
};

export default FacebookMeta;
