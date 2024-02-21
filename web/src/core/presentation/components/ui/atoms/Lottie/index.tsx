/* eslint-disable @typescript-eslint/no-explicit-any */
import Lottie from 'react-lottie';

export interface LocationBusProps {
  isVisible: boolean;
}

interface OptionalProps {
  height: number | string;
  width: number | string;
  loop: boolean;
}

interface LottieCustomProps
  extends Omit<LocationBusProps, 'isVisible'>,
    Partial<OptionalProps> {
  lottiefile: any;
  autoplay: boolean;
}

const defaultOptions = {
  renderer: 'svg',
};

export const LottieCustom: React.FC<LottieCustomProps> = ({
  lottiefile,
  autoplay,
  loop = false,
  width = 300,
  height = 300,
}) => {
  return (
    <Lottie
      options={{
        ...defaultOptions,
        animationData: lottiefile,
        autoplay,
        loop,
      }}
      height={width}
      width={height}
    />
  );
};
