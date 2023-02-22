import { fetchPage } from '@/lib/api';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { Seo } from '@oak-digital/nextjs-strapi-plugin-seo';

const GenericPage: NextPage = () => {
    // fetch page from api
    const router = useRouter();
    const { id } = router.query;
    const pageIdExtracted = id ? (Array.isArray(id) ? id?.[0] : id) : id;
    const pageId = parseInt(pageIdExtracted ?? '0');
    const { data: pageData } = useQuery(['page', pageId], () => fetchPage(pageId));

    const seo = pageData?.data?.attributes.seo;
    return (
        <div>
            {seo && <Seo seo={seo} strapiUrl={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT} />}
            <h1>{pageData?.data?.attributes.title}</h1>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    // fetch page from api
    const queryClient = new QueryClient();

    if (!context.params?.id) {
        return {
            notFound: true,
        };
    }
    const pageId = parseInt(Array.isArray(context.params.id) ? context.params.id?.[0] : context.params.id);

    await queryClient.prefetchQuery(['page', pageId], () => fetchPage(pageId));

    if (!queryClient.getQueryData(['page', pageId])) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};

export default GenericPage;
