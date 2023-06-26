import { useMemo, useState, lazy, useCallback } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import toastContext from '@/context/toast';
import { IToastProps, THandleShowToast } from '@/interfaces/toast';
import { Global, Container } from '@/styles';

import Redirect from '@/components/Redirect';
import SuspensePage from '@/components/SuspensePage';
import Toast from '@/components/Toast';

const Search = lazy(() => import('@/views/Search'));
const Characters = lazy(() => import('@/views/Characters'));
const Character = lazy(() => import('@/views/Character'));


const queryClient = new QueryClient();

function App() {
  const [toastData, setToastData] = useState<IToastProps>({
    message: '',
    time: 0,
    type: 'success'
  });

  const isShowToast = useMemo(() => toastData.message && toastData.time > 0, [
    toastData.message,
    toastData.time
  ]);
  
  const handleShowToast = useCallback<THandleShowToast>(
    (data) => {
      setToastData({
        time: 4000,
        type: 'info',
        ...data
      });
    }, []);

    return (
      <>
        <Global/>
        <QueryClientProvider client={queryClient}>
          <Container>
            <toastContext.Provider value={{
              data: toastData,
              handleShowToast
            }}>
              <AnimatePresence mode='popLayout'>
                <Router>
                  <Routes>
                    <Route
                      path='/'
                      element={<SuspensePage Page={Search} />}
                    />
                    <Route
                      path='/characters'
                      element={<SuspensePage Page={Characters} />}
                    />
                    <Route
                      path='/characters/:id'
                      element={<SuspensePage Page={Character} />}
                    />
                    <Route
                      path='*'
                      element={<Redirect to='/' />}
                    />
                  </Routes>
                </Router>
              </AnimatePresence>
              <AnimatePresence mode='wait'>
                {
                  isShowToast && <Toast/>
                }
              </AnimatePresence>
            </toastContext.Provider>
          </Container>
        </QueryClientProvider>
      </>
  );
}

export default App;
