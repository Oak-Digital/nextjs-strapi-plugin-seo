export interface IMediaFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    url: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
}
