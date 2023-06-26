import { createContext } from 'react';

import { TImageResponse } from '@/interfaces/api';

const comicModalContext = createContext({
  images: [] as TImageResponse[],
  handleClose: function() {
    null;
  },
});

export default comicModalContext;