import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, Text, Title, UploadPhoto } from '../../../../ui';

import * as yup from 'yup';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { authThunk } from '../../../../../store/slices/auth/auth-thunk';
import { useAppDispatch } from '../../../../../store';
import { useFormBlog } from '../../../../../hooks';

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

export const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const [photoProfile, setPhotoProfile] = useState<string>('');
  const [isLoadingUploadPhoto, setIsLoadingUploadPhoto] = useState(false);
  const { loading, errors, register, handleSubmit, reset } =
    useFormBlog<Inputs>({
      validations: schema,
    });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    dispatch(
      authThunk.registerThunk({
        email: data.email,
        password: data.password,
        profile: {
          firstName: data.firstName,
          lastName: data.lastName,
          photo: photoProfile,
        },
      })
    );

    reset();
    navigate('/');
  };

  return (
    <section className="h-full overflow-y-hidden">
      <article className="flex w-full h-[10%] justify-between gap-20 relative">
        <div className="w-full h-full">
          <img
            className="w-full h-screen object-cover"
            style={{
              height: 'calc(100vh - 260px)',
            }}
            src="https://res.cloudinary.com/runyshark1/image/upload/v1708316368/next-blog/lukbixb6shkkxw9iqjiz.gif"
            alt="login"
          />
        </div>
        <div className="w-full lg:w-1/2 absolute backdrop-blur-sm bg-[rgba(0,0,0,0.6)] right-0 h-full overflow-hidden">
          <div className="h-full flex items-center justify-center flex-col 2xl:w-1/2">
            <form
              className="w-96  h-full justify-center items-center flex flex-col"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Title className="mb-10">Crear cuenta</Title>
              <div className="p-4 w-full">
                <div className="space-y-5">
                  <div>
                    <Text className="mb-3">Foto de perfil</Text>
                    <UploadPhoto
                      onFileChange={setPhotoProfile}
                      isLoading={setIsLoadingUploadPhoto}
                    />
                    <Text className="mt-3" color="grey">
                      La foto es un campo opcional
                    </Text>
                  </div>

                  <Input
                    label="Nombre"
                    type="text"
                    error={errors.password?.message}
                    useForm={register('firstName')}
                  />

                  <Input
                    label="Apellido"
                    type="text"
                    error={errors.password?.message}
                    useForm={register('lastName')}
                  />
                  <Input
                    label="Correro electronico"
                    type="text"
                    error={errors.email?.message}
                    useForm={register('email')}
                  />

                  <Input
                    label="Contraseña"
                    type="password"
                    error={errors.password?.message}
                    useForm={register('password')}
                  />
                </div>
              </div>

              <div className="p-4 flex flex-col justify-end gap-x-2 w-full gap-4">
                <Button
                  className="h-10"
                  type="submit"
                  disabled={loading || isLoadingUploadPhoto}
                >
                  Crear cuenta
                </Button>
                <div className="flex flex-row gap-2 items-center justify-center">
                  <p>¿No tienes una cuenta?</p>
                  <Link to="/auth/register" className="text-blue-500">
                    Registrate
                  </Link>
                </div>
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Link to="/auth/register" className="text-blue-500">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};
