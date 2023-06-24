/**
 * @example
 * time = 1000 // Time is in MS
 */
export interface IToastProps {
  message: string;
  type: 'danger' | 'warning' | 'info' | 'success';
  time: number;
}