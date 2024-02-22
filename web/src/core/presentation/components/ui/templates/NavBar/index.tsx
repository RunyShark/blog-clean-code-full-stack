import { Link } from 'react-router-dom';
import { Logo, Modal } from '../../molecules';
import { Button } from '../../molecules/Button';
import { MenuNavBar } from './components';
import { useAppSelector } from '../../../../store';
import { ProfileUser } from './components/ProfileUser';
import styles from './navBar.module.scss';
export interface Routes {
  id: string;
  name: string;
  path: string;
}

const routes: Routes[] = [
  {
    id: '1',
    name: 'Inicio',
    path: '/home',
  },
];

export const NavBar = () => {
  const { token } = useAppSelector((state) => state.core.session.user);

  return (
    <nav className={styles.nav}>
      <div className="screen items-center py-4">
        <div className="flex items-center gap-11 justify-between w-full md:w-auto">
          <Logo />
          <MenuNavBar routes={routes} />
        </div>
        <div className="flex gap-6">
          {token ? (
            <>
              <ProfileUser />
            </>
          ) : (
            <div className="hidden md:flex flex-row gap-3">
              <Link to="/auth/register">
                <Button variant="secondary">Registro</Button>
              </Link>
              <Link to="/auth/login">
                <Button>Iniciar session</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <Modal isOpen={false} onClose={() => {}}>
        <div className="flex items-center gap-3">
          <h1>w</h1>
        </div>
      </Modal>
    </nav>
  );
};
