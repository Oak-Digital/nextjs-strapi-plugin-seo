import { IAdminapiTokenPermission } from './ApiTokenPermission';
import { IAdminuser } from './User';
import { ExtractNested } from '../builtins/ExtractNested';
import { ExtractFlat } from '../builtins/ExtractFlat';
import { RequiredBy } from '../builtins/RequiredBy';
export interface IAdminapiToken<Populate extends string | never = never> {
    id: number;
    attributes: RequiredBy<
        {
            name: string | null;
            description: string | null;
            type: 'read-only' | 'full-access' | 'custom' | null;
            accessKey: string | null;
            lastUsedAt: string | null;
            permissions?: { data: IAdminapiTokenPermission<ExtractNested<Populate, 'permissions'>>[] };
            expiresAt: string | null;
            lifespan: number | null;
            createdAt: string | null;
            updatedAt: string | null;
            createdBy?: { data: IAdminuser<ExtractNested<Populate, 'createdBy'>> | null };
            updatedBy?: { data: IAdminuser<ExtractNested<Populate, 'updatedBy'>> | null };
        },
        ExtractFlat<Populate>
    >;
}
