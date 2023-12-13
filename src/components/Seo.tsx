import Head from 'next/head';
import { FC } from 'react';
import StructuredData from './StructuredData';
import { FALLBACK_URL } from '../lib/constants';
import { SeoProps } from '../types';
import MetaSocials from './meta-social/MetaSocials';

const Seo: FC<SeoProps> = ({ seo, strapiUrl = FALLBACK_URL }) => {
    const meta: { name: string; content: string }[] = [];

    const addMeta = (name: string, content: string) => meta.push({ name, content });

    if (seo.metaTitle) addMeta('title', seo.metaTitle);
    if (seo.metaDescription) addMeta('description', seo.metaDescription);
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
            <MetaSocials
                metaSocials={seo.metaSocial}
                strapiUrl={strapiUrl}
                fallbackImage={seo.metaImage?.data ?? undefined}
            />
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
