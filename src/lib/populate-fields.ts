import { subfields } from './subfields';

export const seoPopulateFields = ['metaImage', 'metaSocial'] as const;
export const metaSocialPopulateFields = ['image'] as const;

export const seoDeepPopulateFields = [
    ...seoPopulateFields,
    ...subfields('metaSocial', metaSocialPopulateFields),
] as const;
