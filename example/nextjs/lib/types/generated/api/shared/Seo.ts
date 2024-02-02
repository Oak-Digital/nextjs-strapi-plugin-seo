import { IMedia } from "../../builtins/Media";
import { ISharedMetaSocial } from "./MetaSocial";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ISharedSeo<Populate extends string | never = never> = RequiredBy<
  {
    id: number;
    __component: "shared.seo";
    metaTitle: string | null;
    metaDescription: string | null;
    metaImage?: { data: IMedia | null };
    metaSocial?: ISharedMetaSocial<ExtractNested<Populate, "metaSocial">>[];
    keywords: string | null;
    metaRobots: string | null;
    structuredData: any;
    metaViewport: string | null;
    canonicalURL: string | null;
  },
  ExtractFlat<Populate>
>;
