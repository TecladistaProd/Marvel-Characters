import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

interface IStyledProps {
  $container?: boolean;
}

export const Container = tw(motion.div)<IStyledProps>`
  bg-slate-800
  flex-1
  ${
    (p) => p.$container === false ? '' : 'container'
  }
  h-screen
  overflow-auto
`;