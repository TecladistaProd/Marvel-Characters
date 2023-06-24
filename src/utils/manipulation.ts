export const stringArrMan = (data: string | string[]) => {
  if(typeof data === 'string') return new RegExp(`(${data})`, 'gi');
  return new RegExp(`(${data.join('|')})`, 'gi');
}