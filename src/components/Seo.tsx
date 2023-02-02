import Head from 'next/head';
import { FC } from 'react';
import { getStrapiUrl } from '../lib/url';
import StructuredData from './StructuredData';
import MetaSocial from './meta-social/MetaSocial';
import { FALLBACK_URL } from '../lib/constants';
import { SeoProps } from '../types/Props';

const Seo: FC<SeoProps> = ({ seo, strapiUrl = FALLBACK_URL }) => {
    const meta: { name: string; content: string }[] = [];

    const addMeta = (name: string, content: string) => meta.push({ name, content });

    if (seo.metaTitle) addMeta('title', seo.metaTitle);
    if (seo.metaDescription) addMeta('description', seo.metaDescription);
    if (seo.metaImage) {
        const fullUrl = getStrapiUrl(strapiUrl, seo.metaImage.data.attributes.url);
        addMeta('image', fullUrl);
    }
    if (seo.keywords) addMeta('keywords', seo.keywords);
    if (seo.metaRobots) addMeta('robots', seo.metaRobots);

    return (
        <>
            {meta.map(({ name, content }) => {
                return (
                    <Head key={name}>
                        <meta name={name} property={name} content={content} key={'meta-' + name} />
                    </Head>
                );
            })}
            {seo.metaSocial?.map((social) => (
                <MetaSocial key={social.id} metaSocial={social} />
            ))}
            {seo.canonicalURL && (
                <Head>
                    <link rel="canonical" href={seo.canonicalURL} />
                </Head>
            )}
            {seo.structuredData && <StructuredData data={seo.structuredData} key="structured-data-head" />}
        </>
    );
};

export default Seo;
