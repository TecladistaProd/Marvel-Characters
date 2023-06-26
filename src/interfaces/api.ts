export type TImageResponse = {
  path: string;
  extension: string;
};
export interface IResponseData<T = unknown> extends Record<string, unknown> {
  data: {
    count: number;
    limit: number;
    offset: number;
    total: number;
    results: T[];
  }
}

export type TCharactersData = IResponseData<{
  thumbnail: TImageResponse;
  name: string;
  id: number;
}>

export type TCharacterData = IResponseData<{
  thumbnail: TImageResponse;
  name: string;
  id: number;
}>

export type TCharacterComicsData = IResponseData<{
  title: string;
  description: string;
  images: TImageResponse[]
  id: number;
}>