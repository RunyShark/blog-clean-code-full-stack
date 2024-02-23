import { Title } from '../../atoms';
import { gifs } from './data';
import { useAnimation } from './hook/useAnimation';

export const Header = () => {
  const { animation, animation2, currentImage, index } = useAnimation();
  return (
    <div className="screen">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-600 via-purple-700 to-blue-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="flex flex-col items-center gap-12 md:flex-row">
        <header className={`md:w-1/2 ${animation}`}>
          <Title className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">
            {gifs[index].title}{' '}
            <span className="tracking-tight inline font-semibold from-[#1c8eff] to-[#f249f8] text-[2.5rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">
              {gifs[index].gradient}
            </span>{' '}
            {gifs[index].nextGradiante}
          </Title>
        </header>
        <div className="md:w-1/2 object-cover shadow-lg rounded-xl overflow-hidden">
          <img
            className={`w-full h-96 object-contain origin-center ${animation2}`}
            src={currentImage}
            alt="tecnología"
          />
        </div>
      </div>
    </div>
  );
};
