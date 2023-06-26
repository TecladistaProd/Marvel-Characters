import styled from 'styled-components';
import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

const TWM = tw(motion.div)`
  fixed
  top-0
  left-0
  w-full
  h-full
  z-50
  flex
  items-center
  justify-center
  bg-orange-950
  bg-opacity-40
  backdrop-blur-sm
`;

export const Modal = styled(TWM)`
`;

export const ImgContainer = tw.div`
  w-fit
  h-fit
  relative
`;

const TWI = tw(motion.img)`
  rounded-lg
  object-cover
  drop-shadow-lg
`;

export const Image = styled(TWI)`
  height: calc(100vh - 2rem);
  max-width: calc(100vw - 2rem);
`;

interface IAStyledProps {
  $left?: boolean
}

export const Arrow = tw.button<IAStyledProps>`
  absolute
  top-1/2
  -translate-y-1/2
  w-fit
  h-fit
  py-3
  px-4
  flex
  items-center
  justify-center
  bg-gray-800
  bg-opacity-70
  backdrop:blur-md
  rounded
  cursor-pointer
  text-lg
  font-bold
  ${(props) => (props.$left ? "left-0.5" : "right-0.5")}
`;

export const Close = tw.button`
  absolute
  -top-2
  -right-2
  w-8
  h-8
  flex
  items-center
  justify-center
  bg-indigo-200
  text-red-800
  shadow-inner
  shadow-indigo-500
  bg-opacity-90
  backdrop:blur-md
  rounded-full
  cursor-pointer
  text-lg
  font-bold
`;