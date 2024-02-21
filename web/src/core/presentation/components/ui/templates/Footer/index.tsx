import { Logo } from '../../molecules';
import { Copyright, RoutesFooter } from './components';
import { Divider } from '../../atoms/Divider/index';

export const Footer = () => {
  return (
    <div className="w-full">
      <Divider />
      <footer className="border-b border-[rgba(255,255,255,0.2)] bg-transparent">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Logo />
            </div>
            <RoutesFooter />
          </div>
          <Copyright />
        </div>
      </footer>
    </div>
  );
};
