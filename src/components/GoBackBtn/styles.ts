import tw from  'tailwind-styled-components';

export const Container = tw.button`
  dark:bg-green-800
  dark:text-white
  text-black
  bg-green-300
  shadow-xl
  hover:ring-2
  hover:ring-indigo-400
  active:opacity-80
  w-16
  h-16
  rounded-full
  fixed
  top-5
  right-8
  text-sm
  transition-all
  duration-200
  active:scale-110
  ease-out
  z-50
`;