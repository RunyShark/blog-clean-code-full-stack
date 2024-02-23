import { useEffect, useState } from 'react';
import { useSlider } from '../../../../../hooks';
import { gifs } from '../data';

export const useAnimation = () => {
  const { index } = useSlider({ length: gifs.length, timer: 6000 });
  const [currentImage, setCurrentImage] = useState(gifs[index].img);
  const [animation2, setAnimation2] = useState('animate-fadein');
  const [animation, setAnimation] = useState('fadein');

  useEffect(() => {
    setAnimation('');
    setTimeout(() => {
      setAnimation('animate-slidein');
    }, 10);
  }, [index]);

  useEffect(() => {
    setAnimation2('animate-fadeout');
    const timeoutId = setTimeout(() => {
      setCurrentImage(gifs[index].img);

      setAnimation2('animate-fadein');
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [index]);

  return {
    index,
    currentImage,
    animation,
    animation2,
  };
};
