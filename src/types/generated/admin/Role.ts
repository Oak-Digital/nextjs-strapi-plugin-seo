import { IAdminuser } from './User';
import { IAdminpermission } from './Permission';
import { ExtractNested } from '../builtins/ExtractNested';
import { ExtractFlat } from '../builtins/ExtractFlat';
import { RequiredBy } from '../builtins/RequiredBy';
export interface IAdminrole<Populate extends string | never = never> {
    id: number;
    attributes: RequiredBy<
        {
            name: string | null;
            code: string | null;
            description: string | null;
            users?: { data: IAdminuser<ExtractNested<Populate, 'users'>>[] };
            permissions?: { data: IAdminpermission<ExtractNested<Populate, 'permissions'>>[] };
            createdAt: string | null;
            updatedAt: string | null;
            createdBy?: { data: IAdminuser<ExtractNested<Populate, 'createdBy'>> | null };
            updatedBy?: { data: IAdminuser<ExtractNested<Populate, 'updatedBy'>> | null };
        },
        ExtractFlat<Populate>
    >;
}
