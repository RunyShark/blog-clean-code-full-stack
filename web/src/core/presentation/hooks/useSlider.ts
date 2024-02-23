import { useEffect, useState } from 'react';

interface UseSliderProps {
  length: number;
  initialIndex?: number;
  timer?: number;
}

export const useSlider = ({
  length,
  initialIndex = 0,
  timer = 6000,
}: UseSliderProps) => {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, timer);

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  return {
    index,
  };
};
