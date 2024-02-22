import { useAppSelector } from '../../../../../store';
import { Button, Text, Title, Typography } from '../../../../ui';
import { Link } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';

export const Details = () => {
  const { author, content, dateOfPublication, imgUrl, title } = useAppSelector(
    ({ core: { web } }) => web.blogDataControl.currentBlog
  );

  return (
    <div className="screen flex justify-center">
      <div className="flex flex-col gap-16 mb-16 ">
        <div className="flex flex-col items-center lg:flex-row gap-9 w-320 justify-between w-full">
          <div className="w-full lg:w-1/2">
            <header className="h-full flex flex-col gap-10 justify-center w-full">
              <Title className="font-bold">{title}</Title>
              <div>
                <div className="flex gap-2 flex-col">
                  <Typography
                    elementTextType="h2"
                    fontWeight="font-semibold"
                    fontSize="text-lg"
                  >
                    {author}
                  </Typography>
                  <div className="flex flex-row gap-2">
                    <Typography
                      elementTextType="p"
                      fontWeight="font-semibold"
                      fontSize="text-lg"
                    >
                      Publicación en:
                    </Typography>
                    <Typography elementTextType="span" fontSize="text-lg">
                      {dateOfPublication}
                    </Typography>
                  </div>
                </div>
              </div>
              <Link to={'/'}>
                <Button className="w-1/2" iconLeft={<IoHome size={25} />}>
                  Regresar al home
                </Button>
              </Link>
            </header>
          </div>

          <img
            className="w-full lg:w-1/2 h-120 bg-cover bg-center rounded-radius-2xl object-contain overflow-hidden"
            src={imgUrl}
            alt="placeholder"
            width={300}
            height={300}
          />
        </div>

        <Text>{content}</Text>
      </div>
    </div>
  );
};
