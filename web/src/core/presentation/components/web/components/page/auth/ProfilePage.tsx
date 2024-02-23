import React, { useState } from 'react';
import { Button, Input, Modal, Text, Title, UploadPhoto } from '../../../../ui';
import { useAppDispatch, useAppSelector } from '../../../../../store';
import { useFormBlog } from '../../../../../hooks';
import { SubmitHandler } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';
import { AddNewBlog } from '../../../../ui/molecules/addNewBlog';
import { InformationUserAuth } from '../../../../ui/molecules/InformationUserAuth';
import { UserPost, UserProfileHeader } from './components';
import * as yup from 'yup';

type Inputs = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  photo?: string;
};

const schema = yup
  .object({
    email: yup
      .string()
      .email('El correo electronico no es valido')
      .required('El correo electronico es requerido'),
    password: yup
      .string()
      .required('La contraseña es requerida')
      .min(6, 'La contraseña debe tener al menos 6 caracteres'),
    firstName: yup.string().required('El nombre es requerido'),
    lastName: yup.string().required('El apellido es requerido'),
  })
  .required();

export const ProfilePage = () => {
  const {
    core: {
      session: {
        user: {
          token,
          account: { blog, email, profile },
        },
      },
    },
  } = useAppSelector((state) => state);
  const [photoProfile, setPhotoProfile] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoadingUploadPhoto, setIsLoadingUploadPhoto] = useState(false);

  const dispatch = useAppDispatch();
  const { loading, errors, register, handleSubmit, reset } =
    useFormBlog<Inputs>({
      validations: schema,
      values: {
        email,
        firstName: profile.firstName,
        lastName: profile.lastName,
      },
    });

  const handlerCloseModal = () => setIsOpen(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log('data', data, photoProfile);
    // dispatch(
    //   authThunk.registerThunk({
    //     email: data.email,
    //     password: data.password,
    //     profile: {
    //       firstName: data.firstName,
    //       lastName: data.lastName,
    //       photo: photoProfile,
    //     },
    //   })
    // );

    reset();
  };

  const addNewPost = () => {
    setIsOpen(true);
  };

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
                    onFileChange={setPhotoProfile}
                    isLoading={setIsLoadingUploadPhoto}
                  />
                </div>
                <div className="sm:col-span-4 ">
                  <Input
                    label="Nombre"
                    type="text"
                    error={errors.firstName?.message}
                    useForm={register('firstName')}
                  />
                </div>

                <div className="sm:col-span-4">
                  <Input
                    label="Apellido"
                    type="text"
                    // value={profile.lastName}
                    error={errors.lastName?.message}
                    useForm={register('lastName')}
                  />
                </div>

                <div className="sm:col-span-4">
                  <Input
                    label="Correo electronico"
                    // value={email}
                    type="email"
                    error={errors.email?.message}
                    useForm={register('email')}
                  />
                </div>
                <div className="sm:col-span-4">
                  <Input
                    label="Contraseña antigua"
                    type="password"
                    error={errors.password?.message}
                    useForm={register('password')}
                  />
                </div>
                <div className="sm:col-span-4">
                  <Input
                    label="Contraseña"
                    type="password"
                    error={errors.password?.message}
                    useForm={register('password')}
                  />
                </div>
                <div className="flex flex-col justify-end gap-x-2 w-full gap-4">
                  <Button
                    className="h-10"
                    type="submit"
                    disabled={isLoadingUploadPhoto || loading}
                  >
                    Guardar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <UserPost onClick={addNewPost} blog={blog} />
      </div>
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
    </>
  );
};
