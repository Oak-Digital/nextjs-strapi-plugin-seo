import { IMediaFormat } from "./MediaFormat";
import { ExtractNested } from "./ExtractNested";
import { ExtractFlat } from "./ExtractFlat";
import { RequiredBy } from "./RequiredBy";
export interface IMedia<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      formats?: {
        thumbnail?: IMediaFormat | null;
        large?: IMediaFormat | null;
        medium?: IMediaFormat | null;
        small?: IMediaFormat | null;
      } | null;
      name: string;
      hash: string;
      ext: string;
      mime: string;
      url: string;
      provider: string;
      previewUrl: string | null;
      provider_metadata: string | null;
      alternativeText: string | null;
      caption: string | null;
      width: number | null;
      height: number | null;
      size: number;
    },
    ExtractFlat<Populate>
  >;
}
