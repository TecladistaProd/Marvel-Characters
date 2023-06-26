export interface IToastProps {
  message: string;
  type: 'danger' | 'warning' | 'info' | 'success';
  time: number;
}

export type THandleShowToast = (
  data: Omit<IToastProps, 'time' | 'type'> & Partial<Pick<IToastProps, 'time' | 'type'>>) => void;

export interface IToastContext {
  /**
   * Default time and type.
   * If no `time` is defined, it will use 4000ms.
   * If no `type` is defined, it will use 'info'
   * ```tsx
   * handleShowToast({
   *  message: 'Anything',
   *  type: 'success',
   *  time: 5000
   * })
   * ```
   */
  handleShowToast: THandleShowToast;
  data: IToastProps;
}