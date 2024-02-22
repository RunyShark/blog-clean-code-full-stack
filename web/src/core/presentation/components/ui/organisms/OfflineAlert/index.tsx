import React from 'react';
import { Typography } from '../../atoms';

export const OfflineAlert = () => {
  // const {
  //   fetchControl: { isOnline },
  // } = useAppSelector(({ web }) => web);

  return (
    <div
      className={`border-l-4 border-yellow-400 bg-yellow-50 p-4  transition-all ${
        true ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex">
        <div className="ml-3">
          <Typography
            className="text-sm text-yellow-700"
            fontWeight="font-bold"
          >
            No tienes conexión a internet. Comprueba tu conexión. 🤖
          </Typography>
        </div>
      </div>
    </div>
  );
};
