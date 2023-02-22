import Head from 'next/head';
import { FC } from 'react';
import { getStrapiUrl } from '../../lib/url';
import { ISharedMetaSocial } from '../../types/generated';

type Props = {
    metaSocial: ISharedMetaSocial;
    strapiUrl: string;
};

const TwitterMeta: FC<Props> = ({ strapiUrl, metaSocial }) => {
    const { title, description, image } = metaSocial;
    return (
        <Head>
            {title && <meta name="twitter:title" content={title} />}
            {image?.data?.attributes.url && <meta name="twitter:image" content={getStrapiUrl(strapiUrl, image.data.attributes.url)} />}
            {description && <meta name="twitter:description" content={description} />}
        </Head>
    );
};

export default TwitterMeta;
