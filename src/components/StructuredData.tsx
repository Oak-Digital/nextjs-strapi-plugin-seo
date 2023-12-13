import Script from 'next/script';
import { FC } from 'react';

type StructuredDataProps = {
    data: Record<string, any>;
    key: string;
};

const StructuredData: FC<StructuredDataProps> = ({ data, key }) => {
    // TODO: Make sure malicious actors from CMS cannot set arbitrary html
    const jsonString = JSON.stringify(data);
    const html = { __html: jsonString };
    return <Script type="application/ld+json" dangerouslySetInnerHTML={html} key={key} />;
};

export default StructuredData;
