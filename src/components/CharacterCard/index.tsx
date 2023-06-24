import React from 'react';

import { Container, Content, Footer, Img, LinkBtn, TitleName } from './styles';
import { TCharactersData } from '@/interfaces/api';

type TProps = TCharactersData['data']['results'][0] & {
  pos: number;
};

const CharacterCard: React.FC<TProps> = ({ name, id, thumbnail: { path: thumb, extension: ext }, pos }) => {
  return (
    <Container
      initial={{
        opacity: 0,
        filter: 'blur(10px)'
      }}
      animate={{ filter: 'blur(0px)', opacity: 1 }}
      transition={{ type: 'spring', bounce: .4, duration: 1.5, delay: .35 * pos }}
    >
      <Img src={`${thumb}.${ext}`} alt={name} />
      <Content>
        <TitleName>
          {name}
        </TitleName>
        <Footer>
          <LinkBtn to={`/characters/${id}`}>{name} Page</LinkBtn>
        </Footer>
      </Content>
    </Container>
  );
}

export default CharacterCard;