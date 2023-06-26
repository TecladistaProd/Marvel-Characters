import { IToastContext } from '@/interfaces/toast';
import { createContext } from 'react';

const toastContext = createContext<IToastContext>({
  handleShowToast: (() => undefined),
  data: {
    time: 0,
    type: 'info',
    message: ''
  },
});

export default toastContext;