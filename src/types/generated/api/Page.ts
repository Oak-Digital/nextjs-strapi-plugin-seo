import { IMedia } from '../builtins/Media';
import { ISharedSeo } from './shared/Seo';
import { IAdminuser } from '../admin/User';
import { ExtractNested } from '../builtins/ExtractNested';
import { ExtractFlat } from '../builtins/ExtractFlat';
import { RequiredBy } from '../builtins/RequiredBy';
export interface IPage<Populate extends string | never = never> {
    id: number;
    attributes: RequiredBy<
        {
            title: string | null;
            image?: { data: IMedia | null };
            seo?: ISharedSeo<ExtractNested<Populate, 'seo'>> | null;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            createdBy?: { data: IAdminuser<ExtractNested<Populate, 'createdBy'>> | null };
            updatedBy?: { data: IAdminuser<ExtractNested<Populate, 'updatedBy'>> | null };
        },
        ExtractFlat<Populate>
    >;
}
