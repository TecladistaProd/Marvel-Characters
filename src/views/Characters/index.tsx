import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import api from '@/services/api';
import useURLQuery from '@/hook/useURLQuery';
import Redirect from '@/components/Redirect';
import CharacterCard from '@/components/CharacterCard';

import { Container, CharacterName, Title, CardContent } from './styles';
import GoBackBtn from '@/components/GoBackBtn';
import { TCharactersData } from '@/interfaces/api';

const Characters: React.FC = () => {
  const { q: searchValue } = useURLQuery();
  
  const { isLoading, error, data } = useQuery('repoData', async () => {
    const { data: { data } } = await api.get<TCharactersData>('/characters', {
        params: {
            nameStartsWith: searchValue
      }
    });
    return data;
  }, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 1,
    retryDelay: 3000
  });

  const titleInfo = useMemo(() => {
    if(isLoading) return (
      <>
        Searching by: <CharacterName>{searchValue}</CharacterName>
      </>
    )
    else if (error || !data) return <Redirect to='/' />
    else if(data.count === 0) return (
      <>
        Any result for: <CharacterName>{searchValue}</CharacterName>
      </>
    )
    else return (
      <>
        Results for: <CharacterName>{searchValue}</CharacterName>
      </>
    )
  }, [isLoading, searchValue, error, data]);

  return (
    <Container>
      <GoBackBtn/>
      <Title>
        {titleInfo}
      </Title>
      <CardContent>
        {
          data?.results.map((i, k) => <CharacterCard pos={k} {...i} key={k}/>)
        }
      </CardContent>
      {!searchValue && <Redirect to='/' />}
    </Container>
  );
}

export default Characters;