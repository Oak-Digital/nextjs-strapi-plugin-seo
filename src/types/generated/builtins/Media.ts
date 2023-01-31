import { IMediaFormat } from './MediaFormat';
import { ExtractNested } from './ExtractNested';
import { ExtractFlat } from './ExtractFlat';
import { RequiredBy } from './RequiredBy';
export interface IMedia<Populate extends string | never = never> {
    id: number;
    attributes: RequiredBy<
        {
            formats?: {
                thumbnail?: IMediaFormat;
                large?: IMediaFormat;
                medium?: IMediaFormat;
                small?: IMediaFormat;
            } | null;
            name: string;
            alternativeText: string;
            caption: string;
            hash: string;
            ext: string;
            mime: string;
            url: string;
            provider: string;
            previewUrl: string | null;
            provider_metadata: string | null;
            width: number;
            height: number;
            size: number;
        },
        ExtractFlat<Populate>
    >;
}
