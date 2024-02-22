import { Link } from 'react-router-dom';
import { Logo } from '../../molecules';
import { Button } from '../../molecules/Button';
import { MenuNavBar } from './components';
import styles from './navBar.module.scss';
import { useAppSelector } from '../../../../store';
import { Text } from '../../atoms';

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
  const {
    account: {
      profile: { firstName, lastName, photo },
    },
    token,
  } = useAppSelector((state) => state.core.session.user);

  return (
    <nav className={styles.nav}>
      <div className="screen items-center py-4">
        <div className="flex  items-center gap-11">
          <Logo />
          <MenuNavBar routes={routes} />
        </div>
        <div className="flex gap-6">
          {token ? (
            <>
              <div className="flex flex-col">
                <div className="flex flex-row gap-4 items-center">
                  <img
                    src={photo}
                    className="w-12 rounded-full shadow-lg"
                    alt="Avatar"
                  />
                  <div>
                    <Text fontWeight="font-bold">{firstName}</Text>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/auth/register">
                <Button variant="secondary">Registro</Button>
              </Link>
              <Link to="/auth/login">
                <Button>Iniciar session</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
