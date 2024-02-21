import { Outlet } from 'react-router-dom';
import { Footer, NavBar } from '../../../ui';
import { envs } from '../../../../../../common/adapters/env-var';

export const MainLayout = () => {
  console.log('MainLayout', envs.api_url);
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <section className="flex-1">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
