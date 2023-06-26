import React, { useContext, useMemo, useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Variants } from 'framer-motion';

import api from '@/services/api';
import useURLQuery from '@/hook/useURLQuery';
import { TCharactersData } from '@/interfaces/api';
import toastContext from '@/context/toast';
import { COMMON_RQUERY_CONFIGS } from '@/constants/rquery';

import Redirect from '@/components/Redirect';
import CharacterCard from '@/components/CharacterCard';
import GoBackBtn from '@/components/GoBackBtn';
import Loading from '@/components/Loading';

import { Container, CharacterName, Title, CardContent } from './styles';

const VARIANTS: Variants = {
  hidden: {
    translateY: '100%',
    filter: 'saturate(0)',
  },
  show: {
    translateY: 0,
    filter: ['saturate(0)', 'saturate(1)'],
  }
};

const Characters: React.FC = () => {
  const { handleShowToast } = useContext(toastContext);
  const { q: searchValue } = useURLQuery();
  const [wait, setWait] = useState(true);

  useEffect(() => {
    setWait(true);
  }, []);
  
  const { isLoading, error, data } = useQuery('charactersList', async () => {
    if(!searchValue) {
      handleShowToast({
        message: "Please put a name and press enter or search button",
        type: 'warning',
      });
      return;
    }
    setTimeout(() => {
      setWait(false);
    }, 300)
    const { data: { data } } = await api.get<TCharactersData>('/characters', {
      params: { nameStartsWith: searchValue }
    });
    return data;
  }, COMMON_RQUERY_CONFIGS);

  const titleInfo = useMemo(() => {
    if(isLoading || wait) return (
      <>
        Searching by: <CharacterName>{searchValue}</CharacterName>
      </>
    )
    else if (!wait && (error || !data)) {
      handleShowToast({
        message: `An error occurred searching by ${searchValue}`,
        type: 'warning'
      });
      return <Redirect to='/' />
    }
    else if(data && data.count === 0) return (
      <>
        Any result for: <CharacterName>{searchValue}</CharacterName>
      </>
    )
    else return (
      <>
        Results for: <CharacterName>{searchValue}</CharacterName>
      </>
    )
  }, [isLoading, searchValue, error, data, handleShowToast, wait]);

  return (
    <Container
      initial='hidden'
      animate='show'
      exit='hidden'
      variants={VARIANTS}
      transition={{ type: "spring", bounce: .3, duration: 1 }}
    >
      <GoBackBtn/>
      <Title>
        {titleInfo}
      </Title>
      <CardContent>
        {
          isLoading ?
          <li><Loading/></li>
          : data?.results.map((i, k) => <CharacterCard pos={k} {...i} key={k}/>)
        }
      </CardContent>
      {!searchValue && <Redirect to='/' />}
    </Container>
  );
}

export default Characters;