import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';

import { IToastProps } from "@/interfaces/toast";

interface IStyledProps {
  $type: IToastProps['type'];
}

const SContainer = styled(motion.div)`
  @media screen and (max-width: 1023.9px) {
    width: calc(100% - 2.5rem);
  }
`;

export const Container = tw(SContainer)<IStyledProps>`
  fixed
  bottom-6
  lg:left-8
  lg:w-10/12
  lg:translate-x-0
  -translate-x-1/2
  left-1/2
  p-2
  px-4
  rounded-md
  max-h-32
  overflow-auto
  transition-all
  ${(p) => ((() => {
    switch(p.$type) {
      case 'success':
        return 'bg-green-100 text-green-900 dark:bg-green-500 dark:text-white';
      case 'danger':
        return 'dark:bg-red-500 dark:text-white bg-red-100 text-red-900';
      case 'info':
        return 'bg-blue-100 text-blue-900 dark:bg-blue-500 dark:text-white';
      case "warning":
        return 'bg-yellow-100 text-yellow-900 dark:bg-yellow-500 dark:text-black';
      default:
        return "bg-slate-100 text-black dark:bg-slate-900 dark:text-white"
    }
  })())}
`;