import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, Title } from '../../../../ui';
import { useAppDispatch } from '../../../../../store';
import { SubmitHandler } from 'react-hook-form';
import { authThunk } from '../../../../../store/slices/auth/auth-thunk';
import { useFormBlog, useSlider } from '../../../../../hooks';
import { gifs, inputsLogin } from './data';
import { loginSchema } from './validations';

type Inputs = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const { index } = useSlider({ length: gifs.length });

  const dispatch = useAppDispatch();
  const { loading, errors, register, handleSubmit, reset } =
    useFormBlog<Inputs>({
      validations: loginSchema,
    });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    dispatch(authThunk.loginThunk(data, navigate));
    reset();
  };

  return (
    <section className="h-full overflow-y-hidden">
      <article className="flex flex-col md:flex-row w-full justify-between gap-20 relative h-[1000px] ">
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
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
                  {inputsLogin.map(({ label, type, key }) => (
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
