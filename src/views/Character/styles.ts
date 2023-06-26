import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import PageWrapper from '@/components/PageWrapper';

export const Container = tw(PageWrapper)`
  w-screen
  flex
  flex-col
  items-stretch
  overflow-x-hidden
`;

const TWFS = tw.section`
  w-screen
  h-screen
  grid
  md:grid-cols-2
  md:grid-rows-1
  grid-cols-1
  grid-rows-2
`;

export const FirstSection = styled(TWFS)`
  grid-template-areas: 'title title' 'image image';
  @media screen and (max-width: 767.9px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      'title'
      'image'
    ;
  }
`;

export const TWCN = tw.h1`
  inline-flex
  items-center
  justify-center
  text-4xl
  font-semibold
  drop-shadow-md
  md:w-full
  md:h-full
  w-screen
  h-screen
`;

export const CharacterName = styled(TWCN)`
  grid-area: 'title';
`

const TWCI = tw.img`
  object-cover
  object-center
  md:w-full
  md:h-full
  w-screen
  h-screen
`;

export const CharacterImg = styled(TWCI)`
  grid-area: 'image';
`;

export const ComicTitle = tw.h2`
  text-3xl
  font-bold
  drop-shadow-md
  mt-8
  text-center
`;

export const ComicSection = tw.section`
  flex-1
  w-full
  p-5
  flex
  gap-5
  justify-evenly
  flex-wrap
`;

export const ComicCard = tw.button`
  block
  max-w-sm
  p-6
  bg-white
  border
  border-gray-200
  rounded-lg
  shadow
  hover:bg-gray-100
  dark:bg-gray-800
  dark:border-gray-700
  dark:hover:bg-gray-700
  active:opacity-75
  disabled:active:opacity-100
  disabled:border-none
  disabled:hover:bg-gray-white
  dark:disabled:hover:bg-gray-800
  transition-all
  duration-200
  overflow-hidden
  flex-grow-0
  h-fit
`;

export const CCTitle = tw.p`
  mb-2
  text-2xl
  font-bold
  tracking-tight
  text-gray-900
  dark:text-white
`;

export const CCDescription = tw.p`
  font-normal
  text-gray-700
  dark:text-gray-400
`;