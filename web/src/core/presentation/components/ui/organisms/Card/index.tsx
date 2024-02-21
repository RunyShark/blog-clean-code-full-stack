import { IoArrowForwardOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Text, Title } from '../../atoms';
import styles from './card.module.scss';

export const Card = () => {
  return (
    <Link
      to={'/'}
      className="w-[90%] md:w-80 bg-[rgba(255,255,255,0.08)] h-[500px] rounded-xl transition-all duration-300 hover:scale-105 hover:cursor-pointer overflow-hidden relative"
    >
      <img
        className="rounded-t-xl w-full h-56 object-cover "
        src="https://res.cloudinary.com/runyshark1/image/upload/v1708279016/ai-art-astronaut-spacesuit-space-science-fiction-hd-wallpaper-preview_tcmsch.jpg"
        alt="imagen"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-white bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-5"></div>
      <div className="mt-6 px-5 flex flex-col gap-5">
        <div className="flex flex-row gap-7 items-center justify-between">
          <Title
            elementTextType="h3"
            fontSize="text-2xl"
            className={`${styles.card__lineClamp2} w-[80%]`}
          >
            Artículos recientesdasdsadas
          </Title>
          <IoArrowForwardOutline size={25} />
        </div>
        <div className="flex flex-col gap-3">
          <Text className={styles.card__lineClamp3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            veritatis voluptate cumque aliquid nisi commodi quasi iste eum,
            dolorum facilis eligendi ut quibusdam, atque consectetur in
            voluptatum possimus voluptatibus perferendis!
          </Text>

          <div className="flex flex-col">
            <div className="flex flex-row gap-4 items-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                className="w-12 rounded-full shadow-lg"
                alt="Avatar"
              />
              <div>
                <Text fontWeight="font-bold">Pablito allala</Text>
                <Text fontSize="text-base">
                  <span className="font-bold">Fecha:</span> 11/29/2024
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
