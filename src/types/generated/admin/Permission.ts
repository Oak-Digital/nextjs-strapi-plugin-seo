import { IAdminrole } from './Role';
import { IAdminuser } from './User';
import { ExtractNested } from '../builtins/ExtractNested';
import { ExtractFlat } from '../builtins/ExtractFlat';
import { RequiredBy } from '../builtins/RequiredBy';
export interface IAdminpermission<Populate extends string | never = never> {
    id: number;
    attributes: RequiredBy<
        {
            action: string | null;
            subject: string | null;
            properties: any;
            conditions: any;
            role?: { data: IAdminrole<ExtractNested<Populate, 'role'>> | null };
            createdAt: string | null;
            updatedAt: string | null;
            createdBy?: { data: IAdminuser<ExtractNested<Populate, 'createdBy'>> | null };
            updatedBy?: { data: IAdminuser<ExtractNested<Populate, 'updatedBy'>> | null };
        },
        ExtractFlat<Populate>
    >;
}
