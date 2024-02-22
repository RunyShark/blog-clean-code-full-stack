import { Outlet } from 'react-router-dom';
import { Footer, NavBar } from '../../../ui';
import { useEffect } from 'react';
import { webThunk } from '../../../../store/slices/web/web-thunk';
import { useAppDispatch } from '../../../../store';

export const MainLayout = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(webThunk.initWeb());
  }, []);

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
