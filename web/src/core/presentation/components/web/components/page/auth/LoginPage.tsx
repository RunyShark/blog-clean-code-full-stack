import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, Title } from '../../../../ui';

import * as yup from 'yup';
import { useAppDispatch } from '../../../../../store';
import { SubmitHandler } from 'react-hook-form';
import { authThunk } from '../../../../../store/slices/auth/auth-thunk';
import { useFormBlog, useSlider } from '../../../../../hooks';
import { gifs } from './data';

type Inputs = {
  email: string;
  password: string;
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
  })
  .required();

export const LoginPage = () => {
  const { index } = useSlider({ length: gifs.length });

  const dispatch = useAppDispatch();
  const { loading, errors, register, handleSubmit, reset } =
    useFormBlog<Inputs>({
      validations: schema,
    });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    dispatch(authThunk.loginThunk(data));

    reset();
    navigate('/profile');
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
              <Title className="mb-10">Inicia session</Title>
              <div className="p-4 w-full">
                <div className="space-y-5">
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
                <Button className="h-10" type="submit" disabled={loading}>
                  Iniciar session
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
