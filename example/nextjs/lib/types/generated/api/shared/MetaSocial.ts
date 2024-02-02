import { IMedia } from "../../builtins/Media";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ISharedMetaSocial<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "shared.meta-social";
      socialNetwork: "Facebook" | "Twitter" | null;
      title: string | null;
      description: string | null;
      image?: { data: IMedia | null };
    },
    ExtractFlat<Populate>
  >;
