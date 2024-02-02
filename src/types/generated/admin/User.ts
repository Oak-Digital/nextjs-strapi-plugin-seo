import { IAdminrole } from './Role';
import { ExtractNested } from '../builtins/ExtractNested';
import { ExtractFlat } from '../builtins/ExtractFlat';
import { RequiredBy } from '../builtins/RequiredBy';
export interface IAdminuser<Populate extends string | never = never> {
    id: number;
    attributes: RequiredBy<
        {
            firstname: string | null;
            lastname: string | null;
            username: string | null;
            email: string | null;
            resetPasswordToken: string | null;
            registrationToken: string | null;
            isActive: boolean | null;
            roles?: { data: IAdminrole<ExtractNested<Populate, 'roles'>>[] };
            blocked: boolean | null;
            preferedLanguage: string | null;
            createdAt: string | null;
            updatedAt: string | null;
            createdBy?: { data: IAdminuser<ExtractNested<Populate, 'createdBy'>> | null };
            updatedBy?: { data: IAdminuser<ExtractNested<Populate, 'updatedBy'>> | null };
        },
        ExtractFlat<Populate>
    >;
}
