import React, { useState } from 'react';
import { Title } from '../../atoms';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { IoSearch } from 'react-icons/io5';

export const Search = () => {
  // const { isActiveFilter } = useAppSelector(({ web }) => web);
  // const dispatch = useAppDispatch();
  const [input, setInput] = useState<string>('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setInput('');
  };

  const clearFilters = () => {};

  return (
    <form className="relative flex" onSubmit={handlerSubmit}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-6">
          <Title fontSize="text-xl">Buscar blog</Title>
          {/* {isActiveFilter && (
            <Button
              className="max-w-48 h-11"
              iconLeft={<IoTrash size={25} />}
              onClick={clearFilters}
            >
              Eliminar filtros
            </Button>
          )} */}
        </div>

        <div className="relative">
          <input
            type="text"
            name="input"
            value={input}
            onChange={onChange}
            className=" border border-indigo-600  bg-transparent relative rounded-md h-w-12 z-1 pl-12 pr-7 py-3 block transition-all w-80 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6 focus:outline-none"
            placeholder="Search for a blog post..."
          />
          <div className="absolute top-3 left-3 -z-10">
            <IoSearch className="text-indigo-400" size="25" />
          </div>
        </div>
      </div>
    </form>
  );
};
