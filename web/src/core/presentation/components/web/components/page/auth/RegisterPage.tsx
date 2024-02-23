import { useNavigate } from 'react-router-dom';
import { Button, Input, Text, Title, UploadPhoto } from '../../../../ui';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { authThunk } from '../../../../../store/slices/auth/auth-thunk';
import { useAppDispatch } from '../../../../../store';
import { useFormBlog, useSlider } from '../../../../../hooks';
import { gifs, inputsRegister } from './data';
import { registerSchema } from './validations';

type Inputs = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  photo?: string;
};

export const RegisterPage = () => {
  const { index } = useSlider({ length: gifs.length });
  const dispatch = useAppDispatch();
  const [photoProfile, setPhotoProfile] = useState<string>('');
  const [isLoadingUploadPhoto, setIsLoadingUploadPhoto] = useState(false);
  const { loading, errors, register, handleSubmit, reset } =
    useFormBlog<Inputs>({
      validations: registerSchema,
    });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    dispatch(
      authThunk.registerThunk(
        {
          email: data.email,
          password: data.password,
          profile: {
            firstName: data.firstName,
            lastName: data.lastName,
            photo: photoProfile,
          },
        },
        navigate
      )
    );

    reset();
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
            src={gifs[index]}
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

                  {inputsRegister.map(({ label, type, key }) => (
                    <Input
                      label={label}
                      type={type}
                      error={errors[key as keyof Inputs]?.message}
                      useForm={register(key as keyof Inputs)}
                    />
                  ))}
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
              </div>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};
