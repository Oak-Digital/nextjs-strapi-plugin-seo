import { IUploadFolder } from './Folder';
import { IAdminuser } from '../admin/User';
import { ExtractNested } from '../builtins/ExtractNested';
import { ExtractFlat } from '../builtins/ExtractFlat';
import { RequiredBy } from '../builtins/RequiredBy';
export interface IUploadFile<Populate extends string | never = never> {
    id: number;
    attributes: RequiredBy<
        {
            name: string | null;
            alternativeText: string | null;
            caption: string | null;
            width: number | null;
            height: number | null;
            formats: any;
            hash: string | null;
            ext: string | null;
            mime: string | null;
            size: number | null;
            url: string | null;
            previewUrl: string | null;
            provider: string | null;
            provider_metadata: any;
            related?: any;
            folder?: { data: IUploadFolder<ExtractNested<Populate, 'folder'>> | null };
            folderPath: string | null;
            createdAt: string | null;
            updatedAt: string | null;
            createdBy?: { data: IAdminuser<ExtractNested<Populate, 'createdBy'>> | null };
            updatedBy?: { data: IAdminuser<ExtractNested<Populate, 'updatedBy'>> | null };
        },
        ExtractFlat<Populate>
    >;
}
