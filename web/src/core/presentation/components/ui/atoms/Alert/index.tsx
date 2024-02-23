import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../store';
import { IoHappy, IoWarning } from 'react-icons/io5';
import { hideAlert } from '../../../../store/slices/Alert/AlertSlice';

export const Alert: React.FC = () => {
  const dispatch = useAppDispatch();
  const { message, active, type } = useAppSelector(({ alert }) => alert);

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        dispatch(hideAlert());
      }, 3000);
    }
  }, [active]);

  return (
    <div
      className={`absolute z-50 w-96 right-10 top-5 ${
        active ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={
          type === 'success'
            ? 'bg-green-100 border-green-500 text-green-700 mb-3 inline-flex w-full items-center rounded-lg px-6 py-5'
            : 'bg-red-100 border-red-500 text-red-700 mb-3 inline-flex w-full items-center rounded-lg px-6 py-5'
        }
        role="alert"
      >
        <span className="mr-2">
          {type === 'success' ? <IoHappy /> : <IoWarning />}
        </span>
        {message}
      </div>
    </div>
  );
};
