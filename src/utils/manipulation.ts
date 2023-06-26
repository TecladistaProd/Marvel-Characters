import { TCharacterComicsData } from "@/interfaces/api";

export const stringArrMan = (data: string | string[]) => {
  if(typeof data === 'string') return new RegExp(`(${data})`, 'gi');
  return new RegExp(`(${data.join('|')})`, 'gi');
}


export const randomIntFromInterval = (min: number, max: number) => 
  Math.floor(Math.random() * (max - min + 1) + min);


export const comicsManipulate = (data: TCharacterComicsData['data']['results']) => data
  .sort((a, b) => {
    if(!a.images && !b.images) return 0;
    else if(!a.images && b.images) {
      return -1;
    } else if(a.images && !b.images) {
      return 1;
    } else if(a.images?.length > b.images?.length) {
      return -1;
    } else if (a.images?.length < b.images?.length) {
      return 1;
    } else {
      return 0;
    }
  })
  .sort((a, b) => {
    if(!a.description && !b.description) return 0;
    else if(!a.description && b.description) {
      return 1;
    } else if(a.description && !b.description) {
      return -1;
    } else if(a.description?.length > b.description?.length) {
      return 1;
    } else if (a.description?.length < b.description?.length) {
      return -1;
    } else {
      return 0;
    }
  })