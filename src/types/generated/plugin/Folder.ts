import { IUploadFile } from './File';
import { IAdminuser } from '../admin/User';
import { ExtractNested } from '../builtins/ExtractNested';
import { ExtractFlat } from '../builtins/ExtractFlat';
import { RequiredBy } from '../builtins/RequiredBy';
export interface IUploadFolder<Populate extends string | never = never> {
    id: number;
    attributes: RequiredBy<
        {
            name: string | null;
            pathId: number | null;
            parent?: { data: IUploadFolder<ExtractNested<Populate, 'parent'>> | null };
            children?: { data: IUploadFolder<ExtractNested<Populate, 'children'>>[] };
            files?: { data: IUploadFile<ExtractNested<Populate, 'files'>>[] };
            path: string | null;
            createdAt: string | null;
            updatedAt: string | null;
            createdBy?: { data: IAdminuser<ExtractNested<Populate, 'createdBy'>> | null };
            updatedBy?: { data: IAdminuser<ExtractNested<Populate, 'updatedBy'>> | null };
        },
        ExtractFlat<Populate>
    >;
}
