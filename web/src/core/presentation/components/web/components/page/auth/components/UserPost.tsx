import { Button, Card, LottieCustom, Title } from '../../../../../ui';
import contentWriting from '../../../../../../../../common/json/contentWriting.json';
import { BlogEntity } from '../../../../../../../domain/entities';
import { UserProfileHeader } from './UserProfileHeader';

interface UserPostProps {
  onClick: () => void;
  blog: BlogEntity[];
}

export const UserPost: React.FC<UserPostProps> = ({ onClick, blog }) => {
  return (
    <div className="flex flex-col gap-40">
      <div className="space-y-12 w-full">
        <UserProfileHeader
          title={'Blogs'}
          description={'Todos tus blogs en un solo lugar'}
        />
        <div className="flex flex-col gap-4 pt-5 ">
          <Title fontSize="text-xl">Buscar blog</Title>
          <Button onClick={onClick}>Nuevo blog</Button>
        </div>
      </div>

      <div className="flex h-full ">
        {blog.length ? (
          <div className="flex overflow-x-auto space-x-12 overflow-y-hidden">
            {blog.map((blog) => (
              <Card
                {...blog}
                key={blog.id}
                to={`/home/blog/${blog.title.split(' ').join('-')}`}
                className="shrink-0 scale-90"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1  gap-16 justify-items-center w-full pb-10 h-64">
            <LottieCustom
              lottiefile={contentWriting}
              autoplay
              loop={true}
              width={300}
              height={500}
            />
          </div>
        )}
      </div>
    </div>
  );
};
