import { Title } from '../../atoms';

export const Header = () => {
  return (
    <div className="screen">
      <div className="flex flex-col items-center gap-12 md:flex-row">
        <header className="md:w-1/2">
          <Title className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">
            Descubre lo último en el universo de la{' '}
            <span className="tracking-tight inline font-semibold from-[#1c8eff] to-[#f249f8] text-[2.5rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">
              tecnología
            </span>{' '}
            tu fuente de confianza
          </Title>
        </header>
        <div className="md:w-1/2 object-cover  shadow-lg">
          <img
            className="rounded-xl"
            src="https://res.cloudinary.com/runyshark1/image/upload/v1708321288/next-blog/iuqe1ujzg5dmyvtwkdpo.gif"
            alt="tecnología"
          />
        </div>
      </div>
    </div>
  );
};
