import { Outlet } from 'react-router-dom';
import { Alert, Footer, NavBar, OfflineAlert } from '../../../ui';
import { useInternetConnection } from '../../../../hooks';

export const MainLayout = () => {
  useInternetConnection();
  return (
    <div className="flex flex-col min-h-screen">
      <Alert />
      <NavBar />
      <OfflineAlert />
      <section className="flex-1">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
