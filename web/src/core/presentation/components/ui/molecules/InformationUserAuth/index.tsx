import { LottieCustom, Text, Title } from '../../atoms';
import { Button } from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import userAccount from '../../../../../../common/json/userAccount.json';

export const InformationUserAuth = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Title fontSize="text-xl">Nuevo blog</Title>
      <hr className="my-2 sm:mx-auto border-gray-700" />
      <Text>Debes de crear una cuenta para crear postar un blog</Text>
      <LottieCustom
        lottiefile={userAccount}
        autoplay
        loop={true}
        width={400}
        height={400}
      />
      <hr className="my-2 sm:mx-auto border-gray-700" />

      <div className="p-4 flex flex-col justify-end gap-x-2 w-full gap-4">
        <Button
          className="h-10"
          type="submit"
          onClick={() => navigate('/auth/register')}
        >
          Crear cuenta
        </Button>
        <div className="flex flex-row gap-2 items-center justify-center">
          <p>¿Ya tienes cuenta?</p>
          <Link to="/auth/login" className="text-blue-500">
            iniciar session
          </Link>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center">
          <Link to="/auth/register" className="text-blue-500">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </div>
    </div>
  );
};
