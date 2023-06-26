import React, { useState, useContext, useMemo, useCallback } from "react";
import { useDebouncedEffect } from '@react-hookz/web';
import { AnimatePresence, Variants } from "framer-motion";

import comicModalContext from "@/context/comicModalContext";

import { Modal, Arrow, Image, ImgContainer, Close } from './styles';

const IMG_VARIANTS: Variants = {
  enter: (dir) => ({
    translateX: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    translateX: "0%",
    opacity: 1,
  },
  exit: (dir) => ({
    translateX: dir < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

const MODAL_VARIANTS: Variants = {
  initial: {
    translateY: '0%',
    translateX: "-100%",
    scale: 5,
    opacity: 0,
  },
  animate: {
    translateY: '0%',
    translateX: "0%",
    opacity: 1,
    scale: 1,
  },
  exit: {
    translateY: '100%',
    opacity: 1,
  },
};

const ComicModal: React.FC = () => {
  const { images, handleClose } = useContext(comicModalContext);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [LAI, setLAI] = useState(false); // Load All Images

  const handleChangeImage = useCallback((newDirection: number, e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setDirection(newDirection);
    setIndex(ind => (ind + newDirection + images.length) % images.length);
  }, [images]);

  const show = useMemo(() => {
    setTimeout(() => setLAI(true), 400);
    return images.length > 0;
  }, [images]);

  useDebouncedEffect(() => {
    setIndex(0);
    setDirection(0);
    setLAI(false);
  }, [images], 300);

  return (
    <AnimatePresence mode='wait'>
      {
        show && (
          <Modal
            initial='initial'
            animate='animate'
            exit='exit'
            variants={MODAL_VARIANTS}
            transition={{
              type: 'spring',
              duration: .75,
              bounce: .4
            }}
            onClick={handleClose}>
            <ImgContainer>
              <AnimatePresence mode='popLayout' custom={direction} initial={false}>
                <Image
                  onClick={(e: React.MouseEvent<HTMLImageElement>) => {
                    e.stopPropagation();
                  }}
                  key={index}
                  custom={direction}
                  src={`${images[index].path}.${images[index].extension}`}
                  alt={`Comic Image ${index + 1}`}
                  variants={IMG_VARIANTS}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    type: 'spring',
                    bounce: .4,
                    duration: .6
                  }}
                  />
              </AnimatePresence>
              {
                !LAI && images.length > 1 && images.map((i, k) => 
                  <img style={{ display: 'none' }} key={k} src={`${i.path}.${i.extension}`} />)
              }
              <Close>
                X
              </Close>
              {
                images.length > 1 && (
                  <>
                    <Arrow
                      $left
                      onClick={handleChangeImage.bind(null, -1)}
                    >
                      {"<"}
                    </Arrow>
                    <Arrow
                      onClick={handleChangeImage.bind(null, 1)}
                    >
                      {">"}
                    </Arrow>
                  </>
                )
              }
            </ImgContainer>
          </Modal>
        )
      }
    </AnimatePresence>
  );
};

export default ComicModal;
