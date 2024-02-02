import { IUsersPermissionsPermission } from './Permission';
import { IUsersPermissionsUser } from './User';
import { IAdminuser } from '../admin/User';
import { ExtractNested } from '../builtins/ExtractNested';
import { ExtractFlat } from '../builtins/ExtractFlat';
import { RequiredBy } from '../builtins/RequiredBy';
export interface IUsersPermissionsRole<Populate extends string | never = never> {
    id: number;
    attributes: RequiredBy<
        {
            name: string | null;
            description: string | null;
            type: string | null;
            permissions?: { data: IUsersPermissionsPermission<ExtractNested<Populate, 'permissions'>>[] };
            users?: { data: IUsersPermissionsUser<ExtractNested<Populate, 'users'>>[] };
            createdAt: string | null;
            updatedAt: string | null;
            createdBy?: { data: IAdminuser<ExtractNested<Populate, 'createdBy'>> | null };
            updatedBy?: { data: IAdminuser<ExtractNested<Populate, 'updatedBy'>> | null };
        },
        ExtractFlat<Populate>
    >;
}
