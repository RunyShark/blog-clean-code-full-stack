import { Outlet } from 'react-router-dom';
import { Footer, NavBar } from '../../../ui';

export const MainLayout = () => {
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
