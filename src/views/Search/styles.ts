import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

export const Container = tw(motion.div)`
  bg-slate-800
  flex-1
  container
  mx-auto
  flex
  flex-col
  items-center
  justify-center
  h-screen
`;

export const Content = tw.div`
  lg:w-1/2
  lg:p-0
  px-8
  w-full
`;

export const ImgIcon = tw.img`
  w-52
  h-52
  mb-8
`;

export const SearchInput = tw.input`
  block
  w-full
  p-3
  text-gray-900
  border
  border-gray-300
  rounded-lg
  bg-gray-50
  sm:text-xs
  focus:ring-blue-500
  focus:border-blue-500
  dark:bg-gray-700
  dark:border-gray-600
  dark:placeholder-gray-400
  dark:text-white
  dark:focus:ring-blue-500
  dark:focus:border-blue-500
`;

export const SearchBtn = tw.button`
  text-white
  bg-purple-700
  hover:bg-purple-800
  font-medium
  rounded-lg
  text-sm
  uppercase
  px-5
  py-2.5
  mb-2
  dark:bg-purple-600
  dark:hover:bg-purple-700
  focus:shadow-xl
  active:ring-1
  active:ring-purple-200
  active:opacity-80
  w-full
  mt-4
  transition-all
  duration-200
`;