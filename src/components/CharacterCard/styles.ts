import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import tw from "tailwind-styled-components";
import styled from "styled-components";

export const Container = tw(motion.li)`
  w-full
  max-w-md
  bg-white
  border
  border-gray-200
  rounded-lg
  shadow
  dark:bg-gray-800
  dark:border-gray-700
  list-none
  hover:ring-1
  ring-orange-600
  ring-0
  hover:shadow-2xl
  transition-all
  duration-200
  hover:scale-105
  ease-out
`;

export const Img = styled(tw.img`
  p-8
  rounded-full
  object-cover
  mx-auto
`)`
  width: 300px;
  height: 300px;
`;

export const Content = tw.div`
  px-5
  pb-5
`;

export const TitleName = tw.h5`
  text-xl
  font-semibold
  tracking-tight
  text-gray-900
  dark:text-white
  mb-4
`;

export const Footer = tw.div`
  flex
  items-center
  justify-between
`;

export const LinkBtn = tw(Link)`
  text-white
  bg-red-700
  hover:bg-red-800
  focus:ring-2
  focus:outline-none
  focus:ring-red-300
  font-medium
  rounded-lg
  text-sm
  px-5
  py-2.5
  text-center
  dark:bg-red-600
  dark:hover:bg-red-700
  dark:focus:ring-red-800
  w-full
  transition-all
`;