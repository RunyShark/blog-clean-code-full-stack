import { IoLogOut, IoPerson } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { Text } from '../../../atoms';
import { useAppDispatch } from '../../../../../store';
import { logout } from '../../../../../store/slices/auth/auth-slice';

interface ProfileOptionsProps {
  onClose: () => void;
  onOpenModal: () => void;
}

export const ProfileOptions: React.FC<ProfileOptionsProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handlerLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <>
      <div className="p-1">
        <Link
          onClick={onClose}
          to="/auth/cuenta"
          className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        >
          <IoPerson className="text-gray-800 dark:text-neutral-300" />
          Mi cuenta
        </Link>
      </div>
      <div
        className="px-4 py-3.5 border-y border-gray-200 dark:border-neutral-800 cursor-pointer"
        onClick={() => (onClose(), handlerLogout())}
      >
        <div className="flex justify-between items-center">
          <Text className="text-sm text-gray-800 dark:text-neutral-300">
            cerrar sesion
          </Text>
          <div className="relative inline-block">
            <IoLogOut className="text-gray-800 dark:text-neutral-300" />
          </div>
        </div>
      </div>
    </>
  );
};
