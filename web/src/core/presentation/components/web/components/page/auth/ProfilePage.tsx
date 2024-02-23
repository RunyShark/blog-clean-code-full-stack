import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Button, Input, Text, UploadPhoto } from '../../../../ui';
import { useFormBlog } from '../../../../../hooks';
import { ModalDeleteAccount, UserPost, UserProfileHeader } from './components';
import { authThunk } from '../../../../../store/slices/auth/auth-thunk';
import { useAppDispatch, useAppSelector } from '../../../../../store';
import { useModal } from '../../../../../hooks/useModal';
import { ModalAddNewBlog } from './components/ModalAddNewBlog';
import { inputsProfile } from './data';
import { profileSchema } from './validations';

type Inputs = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  photo?: string;
};

export const ProfilePage = () => {
  const {
    core: {
      session: {
        user: {
          account: { blog, profile },
        },
      },
    },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { close, isOpen, open } = useModal();
  const [deleteModal, setDeleteModal] = useState(false);
  const [photoState, setPhotoState] = useState({
    photo: profile.photo,
    isLoading: false,
  });

  const { loading, errors, register, handleSubmit, reset } =
    useFormBlog<Inputs>({
      validations: profileSchema,
      values: {
        firstName: profile.firstName,
        lastName: profile.lastName,
      },
    });

  const handlerCloseModal = () => close();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    dispatch(
      authThunk.updateThunk({
        email: data.email,
        password: data.password,
        profile: {
          firstName: data.firstName,
          lastName: data.lastName,
          photo: photoState.photo,
        },
      })
    );

    reset();
  };

  const handlerDeleteBlog = () => dispatch(authThunk.deleteThunk());

  const onFileChange = (photo: string) =>
    setPhotoState({ ...photoState, photo });

  const setIsLoadingUploadPhoto = () =>
    setPhotoState({ ...photoState, isLoading: true });

  return (
    <>
      <div className="grid grid-cols-1 w-full md:grid-cols-2 screen">
        <form
          className="flex flex-row  justify-center w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-12">
            <UserProfileHeader
              title={'Informacion'}
              description={'Informacion del ususario'}
            />

            <div className="pb-12">
              <div className="mt-10 grid grid-cols-1">
                <div className="sm:col-span-4 mb-5">
                  <Text className="mb-3">Foto de perfil</Text>
                  <UploadPhoto
                    loading={loading}
                    photoURL={profile.photo}
                    onFileChange={onFileChange}
                    isLoading={setIsLoadingUploadPhoto}
                  />
                </div>

                {inputsProfile.map((input) => (
                  <div className="sm:col-span-4" key={input.key}>
                    <Input
                      label={input.label}
                      type={input.type}
                      error={errors[input.key as keyof Inputs]?.message}
                      useForm={register(input.key as keyof Inputs)}
                    />
                  </div>
                ))}

                <div className="flex flex-col justify-end gap-x-2 w-full gap-4">
                  <Button
                    className="h-10"
                    type="submit"
                    disabled={photoState.isLoading || loading}
                  >
                    Guardar
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setDeleteModal(true)}
                    className="h-10"
                    variant="secondary"
                    disabled={photoState.isLoading || loading}
                  >
                    Eliminar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <UserPost onClick={open} blog={blog} />
      </div>

      <ModalDeleteAccount
        title="Eliminar cuenta"
        description="¿Estás seguro de eliminar este cuenta?"
        isOpen={deleteModal}
        handlerCloseModal={() => setDeleteModal(false)}
        handlerDeleteBlog={handlerDeleteBlog}
      />

      <ModalAddNewBlog isOpen={isOpen} handlerCloseModal={handlerCloseModal} />
    </>
  );
};
