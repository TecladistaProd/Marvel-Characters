import React, { useCallback, useContext, useMemo } from 'react';
import { Variants } from 'framer-motion';

import toastContext from '@/context/toast';

import { Container } from './styles';

const VARIANTS: Variants = {
  hidden: {
    scale: 0,
    filter: 'blur(100px)',
    opacity: 1
  },
  show: {
    scale: 1,
    filter: 'blur(0px)',
    opacity: 1
  },
  exit: {
    filter: 'blur(2px)',
    opacity: .2,
    scale: .1
  }
};

const Toast: React.FC = () => {
  const { data: toastData, handleShowToast } = useContext(toastContext);
  
  const isShow = useMemo(() => toastData.message && toastData.time > 0, [
    toastData.message,
    toastData.time
  ]);

  const handleEndAnimate = useCallback(() => {
    if(isShow) {
      setTimeout(() => {
        handleShowToast({
          time: 0,
          type: 'info',
          message: ''
        })
      }, toastData.time)
    }
  }, [isShow, toastData.time, handleShowToast]);

  return (
    <Container
      variants={VARIANTS}
      initial='hidden'
      animate='show'
      exit='exit'
      transition={{ ease: 'easeInOut', type: 'tween', duration: .5 }}
      onTransitionEnd={handleEndAnimate}
      $type={toastData.type}>
      {toastData.message}
    </Container>
  );
}

export default Toast;