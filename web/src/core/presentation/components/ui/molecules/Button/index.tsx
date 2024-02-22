import { BaseComponentProps } from '../../../../../domain/baseComponent';

interface IButtonPropsOptional extends BaseComponentProps {
  iconLeft: React.ReactElement;
  iconRight: React.ReactElement;
}
export interface ButtonProps
  extends Partial<IButtonPropsOptional>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  disabled,
  iconLeft,
  iconRight,
  children,
  className = '',
  variant = 'primary',
  ...props
}) => (
  <button
    disabled={disabled}
    {...props}
    className={`relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-bold text-white rounded-md shadow-2xl group ${className} ${
      disabled ? 'cursor-not-allowed' : 'cursor-pointer'
    }`.trim()}
  >
    <span
      className={`absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br 
        ${
          disabled
            ? 'from-gray-400 via-gray-500 to-gray-600'
            : variant === 'primary'
            ? 'opacity-100 from-pink-600 via-purple-700 to-blue-400'
            : 'group-hover:opacity-100 from-[#ff8a05] via-[#ff5478] to-[#ff00c6]'
        }`}
    />
    {/* <!-- Top glass gradient --> */}
    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3" />
    {/* <!-- Bottom gradient --> */}
    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5" />
    {/* <!-- Left gradient --> */}
    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5" />
    {/* <!-- Right gradient --> */}
    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5" />
    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10" />
    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
    <div className="relative flex flex-row justify-between gap-5">
      {iconLeft && iconLeft}
      <span className="w-full">{children}</span>
      {iconRight && iconRight}
    </div>
  </button>
);
