import {
  Button,
  Card,
  Header,
  LottieCustom,
  Modal,
  Search,
  Title,
} from '../../../../ui';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../store/hooks/index';

import { getByIdBlog } from '../../../../../store/slices/web/web-slice';
import { useState } from 'react';
import { AddNewBlog } from '../../../../ui/molecules/addNewBlog';
import { IoClose } from 'react-icons/io5';
import { InformationUserAuth } from '../../../../ui/molecules/InformationUserAuth';
import nofilters from '../../../../../../../common/json/nofilters.json';

export const HomePage = () => {
  const {
    core: {
      session: {
        user: { token },
      },
      web: {
        blogDataControl: { filteredBlogs },
      },
    },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const currentBlock = (id: string) => dispatch(getByIdBlog(id));

  const addNewPost = () => {
    console.log('addNewPost', token);
    setIsOpen(true);
  };

  const handlerCloseModal = () => setIsOpen(false);

  return (
    <section>
      <Header />
      <article className="screen flex flex-col gap-20">
        <div className="flex w-full justify-between">
          <Search />
          <div className="flex flex-col gap-4">
            <Title fontSize="text-xl">Buscar blog</Title>
            <Button onClick={addNewPost}>Postear Blog</Button>
          </div>
        </div>

        <>
          {filteredBlogs.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center w-full pb-10">
              {filteredBlogs.map((blog) => (
                <Card
                  {...blog}
                  key={blog.id}
                  onClick={() => currentBlock(blog.id)}
                  to={`blog/${blog.title.split(' ').join('-')}`}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1  gap-16 justify-items-center w-full pb-10 h-64">
              <LottieCustom
                lottiefile={nofilters}
                autoplay
                loop={true}
                width={300}
                height={500}
              />
            </div>
          )}
        </>
      </article>
      <Modal isOpen={isOpen} onClose={handlerCloseModal}>
        <div className="flex flex-row gap-4 justify-between">
          <Title fontSize="text-xl">Postear Blog</Title>

          <Button
            onClick={handlerCloseModal}
            style={{
              borderRadius: '999px',
            }}
          >
            <IoClose size={20} />
          </Button>
        </div>
        {token ? <AddNewBlog /> : <InformationUserAuth />}
      </Modal>
    </section>
  );
};
