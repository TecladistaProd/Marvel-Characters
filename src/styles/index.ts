import { createGlobalStyle } from "styled-components";
import tw from 'tailwind-styled-components';

export const Global = createGlobalStyle`
  * {
    scroll-behavior: smooth;
    outline: none;
  }
`;

export const Container = tw.div`
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