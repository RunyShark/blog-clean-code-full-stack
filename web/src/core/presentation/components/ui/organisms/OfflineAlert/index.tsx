import { Typography } from '../../atoms';
import { useAppSelector } from '../../../../store';

export const OfflineAlert = () => {
  const {
    core: {
      web: {
        httpControl: { internetConnection },
      },
    },
  } = useAppSelector((state) => state);

  return (
    <div
      className={`border-l-8 border-yellow-400 bg-yellow-50 p-4  transition-all ${
        internetConnection ? 'opacity-0 pointer-events-none' : 'opacity-100'
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
