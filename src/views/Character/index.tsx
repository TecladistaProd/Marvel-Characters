import { useCallback, useContext, useMemo, useState } from "react";
import {
  useParams
} from "react-router-dom";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useDebouncedEffect } from '@react-hookz/web'
import { Variants } from 'framer-motion';

import { TCharacterComicsData, TCharacterData } from "@/interfaces/api";
import { COMMON_RQUERY_CONFIGS } from "@/constants/rquery";
import api from "@/services/api";
import toastContext from "@/context/toast";
import comicModalContext from "@/context/comicModalContext";

import ComicModal from "@/components/ComicModal";
import GoBackBtn from "@/components/GoBackBtn";
import Loading from "@/components/Loading";

import {
  CharacterImg,
  CharacterName,
  Container,
  FirstSection,
  ComicSection,
  ComicTitle,
  ComicCard,
  CCTitle,
  CCDescription
} from './styles';
import { comicsManipulate } from "@/utils/manipulation";

const VARIANTS: Variants = {
  hidden: {
    rotateY: 180,
    scale: 1.5,
  },
  show: {
    rotateY: 0,
    scale: 1,
  }
};


const Character: React.FC = () => {
  const { handleShowToast } = useContext(toastContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedComicImages, setSelectedComicImages] = 
    useState<TCharacterComicsData['data']['results'][0]['images']>([]);  

  const { isLoading, error, data } = useQuery('characterDetails', async () => {
    const { data: { data: character } } = await api.get<TCharacterData>(`/characters/${id}`);
    const { data: { data: { results: comics } } } = await api.get<TCharacterComicsData>(`/characters/${id}/comics`);
    return {
      ...character.results[0],
      comics: comics
    };
  }, COMMON_RQUERY_CONFIGS);

  const comics = useMemo(() => comicsManipulate(data?.comics || []), [data?.comics]);

  useDebouncedEffect(() => {
    if (!id || (!isLoading && (error || !data))) {
      handleShowToast({
        message: "Character not found",
        type: 'warning',
        time: 4000
      });
      navigate(-1);
    }
  }, [error, data, isLoading], 300);

  const handleCloseModal = useCallback(() => {
    setSelectedComicImages([]);
  }, []);

  return (
    <Container
    initial='hidden'
    animate='show'
    exit='hidden'
    variants={VARIANTS}
    transition={{ type: "spring", bounce: .4, duration: 2 }}
      $container={false}
    >
      <GoBackBtn/>
      {
        isLoading ? <Loading/> :
          !data ? null :
          (
            <>
              <FirstSection>
                <CharacterName>
                  {data.name}
                </CharacterName>
                <CharacterImg
                  alt={data.name}
                  src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                />
              </FirstSection>
              <ComicTitle>
                Comics
              </ComicTitle>
              <ComicSection>
                {
                  comics.map((i) => (
                    <ComicCard disabled={i.images.length < 1} onClick={setSelectedComicImages.bind(null, i.images)}>
                      <CCTitle>
                        {i.title}
                      </CCTitle>
                      <CCDescription>
                        {i.description}
                      </CCDescription>
                    </ComicCard>
                  ))
                }
              </ComicSection>
              <comicModalContext.Provider value={{ images: selectedComicImages, handleClose: handleCloseModal }}>
                <ComicModal/>
              </comicModalContext.Provider>
            </>
          )
      }
    </Container>
  );
}

export default Character;