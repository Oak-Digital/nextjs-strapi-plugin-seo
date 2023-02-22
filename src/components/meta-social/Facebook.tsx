import Head from 'next/head';
import { FC } from 'react';
import { getStrapiUrl } from '../../lib/url';
import { ISharedMetaSocial } from '../../types/generated';

type Props = {
    metaSocial: ISharedMetaSocial;
    strapiUrl: string;
};

const FacebookMeta: FC<Props> = ({ metaSocial, strapiUrl }) => {
    const { title, description, image } = metaSocial;

    return (
        <>
            <Head>
                {title && <meta name="og:title" content={title} />}
                {description && <meta name="og:description" content={description} />}
            </Head>
            {image?.data && (
                <Head>
                    <meta name="og:image" content={getStrapiUrl(strapiUrl, image.data.attributes.url)} />
                    {/* TODO: We should know if the image width and height are known since the media is an image */}
                    {image.data.attributes.width !== null && (
                        <meta name="og:image:width" content={image.data.attributes.width.toString()} />
                    )}
                    {image.data.attributes.height !== null && (
                        <meta name="og:image:height" content={image.data.attributes.height.toString()} />
                    )}
                    {image.data.attributes.alternativeText && (
                        <meta name="og:image:alt" content={image.data.attributes.alternativeText} />
                    )}
                </Head>
            )}
        </>
    );
};

export default FacebookMeta;
