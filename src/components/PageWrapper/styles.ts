import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

export const Container = tw(motion.div)`
  bg-slate-800
  flex-1
  container
  h-screen
  overflow-auto
`;