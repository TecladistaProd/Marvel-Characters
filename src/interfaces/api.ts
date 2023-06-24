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
  thumbnail: {
    path: string;
    extension: string;
  };
  name: string;
  id: number;
}>