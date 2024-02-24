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
import { Link } from 'react-router-dom';
import { getByIdBlog } from '../../../../../store/slices/web/web-slice';
import { useEffect, useState } from 'react';
import { AddNewBlog } from '../../../../ui/molecules/addNewBlog';
import { IoClose } from 'react-icons/io5';
import { InformationUserAuth } from '../../../../ui/molecules/InformationUserAuth';
import nofilters from '../../../../../../../common/json/nofilters.json';
import { webThunk } from '../../../../../store/slices/web/web-thunk';
import { BlurColor2 } from '../../../../ui/atoms/BlurColor';

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

  useEffect(() => {
    dispatch(webThunk.initWeb());
  }, []);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const currentBlock = (id: string) => dispatch(getByIdBlog(id));

  const addNewPost = () => setIsOpen(true);

  const handlerCloseModal = () => setIsOpen(false);

  return (
    <section className="">
      <Header />
      <BlurColor2 />
      <article className="screen flex flex-col gap-20">
        <div className="flex w-full flex-col md:flex-row justify-between gap-10">
          <Search />
          <div className="flex flex-col gap-4">
            <Title fontSize="text-xl">Crear blog</Title>
            <Button onClick={addNewPost}>Postear Blog</Button>
          </div>
        </div>

        <>
          {filteredBlogs.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center  w-full pb-10">
              {filteredBlogs.map((blog) => (
                <Link
                  className="w-full justify-center flex"
                  to={`blog/${blog.title.split(' ').join('-')}`}
                  key={blog.id}
                >
                  <Card
                    {...blog}
                    onClick={() => currentBlock(blog.id)}
                    className="hover:scale-105"
                  />
                </Link>
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
