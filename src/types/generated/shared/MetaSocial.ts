import { IMedia } from '../builtins/Media';
export interface ISharedMetaSocial {
    id: number;
    __component: 'shared.meta-social';
    socialNetwork: 'Facebook' | 'Twitter' | null;
    title: string;
    description: string;
    image: { data: IMedia | null };
}
