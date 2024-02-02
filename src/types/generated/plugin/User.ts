import { IUsersPermissionsRole } from './Role';
import { IAdminuser } from '../admin/User';
import { ExtractNested } from '../builtins/ExtractNested';
import { ExtractFlat } from '../builtins/ExtractFlat';
import { RequiredBy } from '../builtins/RequiredBy';
export interface IUsersPermissionsUser<Populate extends string | never = never> {
    id: number;
    attributes: RequiredBy<
        {
            username: string | null;
            email: string | null;
            provider: string | null;
            resetPasswordToken: string | null;
            confirmationToken: string | null;
            confirmed: boolean | null;
            blocked: boolean | null;
            role?: { data: IUsersPermissionsRole<ExtractNested<Populate, 'role'>> | null };
            createdAt: string | null;
            updatedAt: string | null;
            createdBy?: { data: IAdminuser<ExtractNested<Populate, 'createdBy'>> | null };
            updatedBy?: { data: IAdminuser<ExtractNested<Populate, 'updatedBy'>> | null };
        },
        ExtractFlat<Populate>
    >;
}
