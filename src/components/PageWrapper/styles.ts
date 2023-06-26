import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

interface IStyledProps {
  $container?: boolean;
}

export const Container = tw(motion.div)<IStyledProps>`
  dark:bg-slate-800
  bg-slate-300
  flex-1
  ${
    (p) => p.$container === false ? '' : 'container'
  }
  h-screen
  overflow-auto
`;