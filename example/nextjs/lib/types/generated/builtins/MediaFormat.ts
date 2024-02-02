export interface IMediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  url: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
}
