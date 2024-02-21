import { Typography } from '../../../atoms';
import { Link } from 'react-router-dom';

export const RoutesFooter = () => (
  <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
    <div>
      <Typography className="mb-6 text-sm font-semibold  uppercase text-white">
        Resources
      </Typography>
      <ul className="text-gray-400 font-medium">
        <li className="mb-4">
          <Link to="/blog" className="hover:underline">
            Home
          </Link>
        </li>
      </ul>
    </div>
    <div>
      <Typography className="mb-6 text-sm font-semibold uppercase text-white">
        Follow us
      </Typography>
      <ul className=" text-gray-400 font-medium">
        <li className="mb-4">
          <Link
            target="_blank"
            to="https://github.com/RunyShark"
            className="hover:underline "
          >
            Github
          </Link>
        </li>
      </ul>
    </div>
  </div>
);
