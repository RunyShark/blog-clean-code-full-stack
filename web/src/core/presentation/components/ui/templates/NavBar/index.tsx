import { Link } from 'react-router-dom';
import { Logo } from '../../molecules';
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
          {token && (
            <div className="hidden md:flex gap-6">
              <MenuNavBar routes={routes} />
            </div>
          )}
          {!token ? (
            <MenuNavBar routes={routes} />
          ) : (
            <div className="md:hidden flex gap-6">
              <ProfileUser />
            </div>
          )}
        </div>
        <div className="hidden md:flex flex gap-6">
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
    </nav>
  );
};
