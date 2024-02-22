import { Link } from 'react-router-dom';
import { Logo } from '../../molecules';
import { Button } from '../../molecules/Button';
import { MenuNavBar } from './components';
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
  return (
    <nav className={styles.nav}>
      <div className="screen items-center py-4">
        <div className="flex  items-center gap-11">
          <Logo />
          <MenuNavBar routes={routes} />
        </div>
        <div className="flex gap-6">
          <Link to="/auth/register">
            <Button variant="secondary">Registro</Button>
          </Link>
          <Link to="/auth/login">
            <Button>Cueta</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
