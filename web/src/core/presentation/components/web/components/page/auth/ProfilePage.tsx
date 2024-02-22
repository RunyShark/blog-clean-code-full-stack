import React, { useState } from 'react';
import {
  Button,
  Card,
  Input,
  LottieCustom,
  Text,
  Title,
  UploadPhoto,
} from '../../../../ui';
import { useAppDispatch, useAppSelector } from '../../../../../store';
import nofilters from '../../../../../../../common/json/nofilters.json';
import { getByIdBlog } from '../../../../../store/slices/web/web-slice';
import { useFormBlog } from '../../../../../hooks';
import * as yup from 'yup';
import { SubmitHandler } from 'react-hook-form';

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
  const [photoProfile, setPhotoProfile] = useState<string>('');
  const [isLoadingUploadPhoto, setIsLoadingUploadPhoto] = useState(false);
  const {
    core: {
      session: {
        user: {
          account: { blog, email, profile },
        },
      },
    },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const { loading, errors, register, handleSubmit, reset } =
    useFormBlog<Inputs>({
      validations: schema,
    });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log('data', data);
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

  const currentBlock = (id: string) => dispatch(getByIdBlog(id));
  return (
    <form className="screen flex flex-row" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-12">
        <div className="border-b border-[rgba(255,255,255,0.2)] pb-12">
          <Title className="text-base font-semibold leading-7">Profile</Title>
          <p className="mt-1 text-sm leading-6 ">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>

        <div className="pb-12">
          <div className="mt-10 grid grid-cols-1">
            <div className="sm:col-span-4 mb-5">
              <Text className="mb-3">Foto de perfil</Text>
              <UploadPhoto
                onFileChange={setPhotoProfile}
                isLoading={setIsLoadingUploadPhoto}
              />
            </div>
            <div className="sm:col-span-4 ">
              <Input
                label="Nombre"
                type="text"
                // value={profile.firstName}
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
                disabled={isLoadingUploadPhoto}
              >
                Guardar
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="space-y-12 w-full">
          <div className="border-b border-[rgba(255,255,255,0.2)] pb-12">
            <Title className="text-base font-semibold leading-7">
              Tus blogs
            </Title>
            <p className="mt-1 text-sm leading-6 ">Edita tus blogs</p>
          </div>
        </div>
        <div>
          {blog.length ? (
            <div>
              {blog.map((blog) => (
                <Card
                  {...blog}
                  key={blog.id}
                  onClick={() => currentBlock(blog.id)}
                  to={`/home/blog/${blog.title.split(' ').join('-')}`}
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
        </div>
      </div>
    </form>
  );
};
