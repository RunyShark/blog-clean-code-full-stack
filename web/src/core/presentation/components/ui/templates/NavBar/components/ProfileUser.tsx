import { useState } from 'react';
import { ProfileOptions } from './PorfileOptions';
import { useAppSelector } from '../../../../../store';

export const ProfileUser = () => {
  const {
    core: {
      session: {
        user: {
          account: { profile },
        },
      },
    },
  } = useAppSelector((state) => state);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAction = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <div className="flex">
        <button
          onClick={toggleAction}
          id="hs-pro-dnad"
          type="button"
          className="inline-flex flex-shrink-0 items-center gap-x-3 text-start rounded-full focus:outline-none focus:bg-gray-100 dark:focus:bg-neutral-800"
        >
          <img
            className="flex-shrink-0 w-[38px] h-[38px] rounded-full object-cover border-2 "
            src={profile.photo}
            alt="Image Description"
          />
        </button>
      </div>
      <div
        className={`absolute hs-dropdown-menu right-3 w-60 transition-[opacity,margin] duration z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-900 dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ProfileOptions
          onClose={toggleAction}
          onOpenModal={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
    </div>
  );
};
