import tw from 'tailwind-styled-components';
import PageWrapper from '@/components/PageWrapper';

export const Container = tw(PageWrapper)`
  lg:p-7
  p-4
`;

export const Title = tw.h1`
  text-2xl
  font-bold
`;

export const CharacterName = tw.span`
  italic
  font-semibold
`;

export const CardContent = tw.ul`
  flex
  flex-wrap
  gap-3
  gap-y-6
  justify-evenly
  mt-8
`;