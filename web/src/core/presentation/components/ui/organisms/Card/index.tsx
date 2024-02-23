import { IoArrowForwardOutline } from 'react-icons/io5';

import { Text, Title } from '../../atoms';
import styles from './card.module.scss';
import { BlogEntity } from '../../../../../domain/entities';
import { BaseComponentProps } from '../../../../../domain/interface';

interface OptionalProps {
  onClick: () => void;
}

interface CardProps
  extends BlogEntity,
    Partial<OptionalProps>,
    Partial<Omit<BaseComponentProps, 'children' | 'id'>> {}

export const Card: React.FC<CardProps> = ({
  onClick,
  title,
  author,
  content,
  imgUrl,
  photoAuthor,
  dateOfPublication,
  className,
  style,
}) => {
  const handlerClick = () => onClick?.();

  return (
    <div
      onClick={handlerClick}
      style={style}
      className={`w-[90%] md:w-80 bg-[rgba(255,255,255,0.08)] h-[500px] rounded-xl transition-all duration-300 hover:cursor-pointer overflow-hidden relative ${className}`}
    >
      <img
        className="rounded-t-xl w-full h-56 object-cover "
        src={imgUrl}
        alt="imagen"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-white bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-5" />
      <div className="mt-6 px-5 flex flex-col gap-5">
        <div className="flex flex-row gap-7 items-center justify-between">
          <Title
            elementTextType="h3"
            fontSize="text-2xl"
            className={`${styles.card__lineClamp2} w-[80%]`}
          >
            {title}
          </Title>
          <IoArrowForwardOutline size={25} />
        </div>
        <div className="flex flex-col gap-3">
          <Text className={styles.card__lineClamp3}>{content}</Text>

          <div className="flex flex-col">
            <div className="flex flex-row gap-4 items-center">
              <img
                src={photoAuthor}
                className="w-12 rounded-full shadow-lg"
                alt="Avatar"
              />
              <div>
                <Text fontWeight="font-bold">{author}</Text>
                <Text fontSize="text-base">
                  <span className="font-bold">Fecha:</span> {dateOfPublication}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
