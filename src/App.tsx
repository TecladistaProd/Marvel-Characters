import { useMemo, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import tw from 'tailwind-styled-components';

import { Global } from '@/styles';
import toastContext from '@/context/toast';
import { IToastProps } from '@/interfaces/toast';
import Toast from '@/components/Toast';
import Search from '@/views/Search';
import Hero from '@/views/Hero';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search/>,
  },
  {
    path: "about",
    element: <Hero/>,
  },
]);

const Container = tw.div`
  flex-1
  flex
  items-stretch
  relative
  overflow-hidden
  bg-slate-200
  text-black

  dark:bg-slate-800
  dark:text-white
`;


const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);
  const [toastData, setToastData] = useState<IToastProps>({
    message: '',
    time: 0,
    type: 'success'
  });

  const isShowToast = useMemo(() => toastData.message && toastData.time > 0, [
    toastData.message,
    toastData.time
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <Global/>
      <Container>
          <toastContext.Provider value={{
            data: toastData,
            handleShowToast: setToastData
          }}>
          <AnimatePresence mode='wait'>
            <RouterProvider router={router} />
          </AnimatePresence>
          <AnimatePresence mode='wait'>
            {
              isShowToast && <Toast/>
            }
          </AnimatePresence>
          </toastContext.Provider>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
