import { IToastProps } from '@/interfaces/toast';
import { Dispatch, createContext } from 'react';

const toastContext = createContext({
  handleShowToast: (() => undefined) as Dispatch<IToastProps>,
  data: {} as IToastProps,
});

export default toastContext;