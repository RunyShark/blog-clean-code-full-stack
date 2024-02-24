import { Button, Card, LottieCustom, Modal, Title } from '../../../../../ui';
import contentWriting from '../../../../../../../../common/json/contentWriting.json';
import { BlogEntity } from '../../../../../../../domain/entities';
import { UserProfileHeader } from './UserProfileHeader';
import { UpdateBlogDto } from '../../../../../../../domain/dto';
import { useAppDispatch, useAppSelector } from '../../../../../../store';
import { webThunk } from '../../../../../../store/slices/web/web-thunk';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { AddNewBlog } from '../../../../../ui/molecules/addNewBlog';
import { getByIdBlog } from '../../../../../../store/slices/web/web-slice';
import { Link } from 'react-router-dom';
import { ModalDeleteAccount } from './ModalDeleteAccount';

interface UserPostProps {
  onClick: () => void;
  blog: BlogEntity[];
}

export const UserPost: React.FC<UserPostProps> = ({ onClick, blog }) => {
  const {
    web: {
      blogDataControl: { currentBlog },
    },
  } = useAppSelector((state) => state.core);
  const [isOpen, setIsOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    id: '',
  });
  const dispatch = useAppDispatch();

  const setByIdBlog = (id: string) => dispatch(getByIdBlog(id));

  const editBlog = (id: string) => {
    setIsOpen(true);
    setByIdBlog(id);
  };

  const handlerCloseModal = () => setIsOpen(false);

  const updateBlog = (values: Omit<UpdateBlogDto, 'blogId'>) => {
    dispatch(
      webThunk.update({
        blogId: currentBlog.id,
        ...values,
      })
    );
    setIsOpen(false);
  };

  const handlerDeleteBlog = () => {
    dispatch(webThunk.delete({ blogId: deleteModal.id }));
    setDeleteModal({
      isOpen: false,
      id: '',
    });
  };

  return (
    <>
      <div className="flex flex-col gap-20">
        <div className="w-full">
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
            <div className="flex  overflow-x-auto space-x-12 overflow-y-hidden ">
              {blog.map((blog) => (
                <div
                  className="flex flex-col items-center mb-20 "
                  key={blog.id}
                >
                  <Link
                    to={`/home/blog/${blog.title.split(' ').join('-')}`}
                    key={blog.id}
                    onClick={() => editBlog(blog.id)}
                  >
                    <Card {...blog} className="shrink-0 scale-90" />
                  </Link>
                  <div className="flex flex-row  w-[85%] items-end gap-5 bottom-1">
                    <Button variant="primary" onClick={() => editBlog(blog.id)}>
                      Editar
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() =>
                        setDeleteModal({ isOpen: true, id: blog.id })
                      }
                    >
                      Eliminar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center w-full">
              <LottieCustom
                lottiefile={contentWriting}
                autoplay
                loop={true}
                width={200}
                height={200}
              />
            </div>
          )}
        </div>
      </div>

      <ModalDeleteAccount
        title="Eliminar Blog"
        description="¿Estás seguro de eliminar este blog?"
        isOpen={deleteModal.isOpen}
        handlerCloseModal={() =>
          setDeleteModal({
            isOpen: false,
            id: '',
          })
        }
        handlerDeleteBlog={handlerDeleteBlog}
      />

      <Modal isOpen={isOpen} onClose={handlerCloseModal}>
        <div className="flex flex-row gap-4 justify-between">
          <Title fontSize="text-xl">Editar Blog</Title>

          <Button
            onClick={handlerCloseModal}
            style={{
              borderRadius: '999px',
            }}
          >
            <IoClose size={20} />
          </Button>
        </div>
        <AddNewBlog
          onChange={updateBlog}
          photoURL={currentBlog.imgUrl}
          initialValues={{
            title: currentBlog.title,
            content: currentBlog.content,
          }}
          textButton="Guardar cambios"
        />
      </Modal>
    </>
  );
};
