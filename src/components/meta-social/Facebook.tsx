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
                <meta name="og:title" content={title} />
                <meta name="og:description" content={description} />
            </Head>
            {image.data && (
                <Head>
                    <meta name="og:image" content={getStrapiUrl(strapiUrl, image.data.attributes.url)} />
                    <meta name="og:image:width" content={image.data.attributes.width.toString()} />
                    <meta name="og:image:height" content={image.data.attributes.height.toString()} />
                    <meta name="og:image:alt" content={image.data.attributes.alternativeText} />
                </Head>
            )}
        </>
    );
};

export default FacebookMeta;
