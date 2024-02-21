import React from 'react';
import Image from 'next/image';
import { Button, Title } from '@/presentation/components/ui';
import { IoCloudUpload } from 'react-icons/io5';
import { useFormBlog } from '../hook/useFormBlog';
import { UploadPhoto } from './UploadPhoto';

export interface AddNewBlogFormProps {
  onCloseModal: () => void;
}

export const AddNewBlogForm: React.FC<AddNewBlogFormProps> = ({
  onCloseModal,
}) => {
  const {
    postBlogError,
    loading,
    errors,
    updatePhoto,
    processPreview,
    resetPhoto,
    upLoadPhoto,
    inputElement,
    register,
    handleSubmit,
    onSubmit,
  } = useFormBlog({ onCloseModal });

  return (
    <>
      {postBlogError && (
        <div className="p-4 bg-red-100 text-red-500 rounded-lg">
          <Title fontSize="text-sm">{postBlogError}</Title>
        </div>
      )}
      <form className="w-80" onSubmit={handleSubmit(onSubmit)}>
        <div className="p-4">
          <div className="space-y-5">
            <div>
              <label
                htmlFor="hs-pro-dalpn"
                className="block mb-2 text-sm font-medium text-black"
              >
                Foto o gift blog
              </label>

              <UploadPhoto
                updatePhoto={updatePhoto}
                onChange={processPreview}
                upLoadPhoto={upLoadPhoto}
                inputElement={inputElement}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Titulo
              </label>
              <div className="relative">
                <input
                  type="text"
                  {...register('title')}
                  className="border border-indigo-500  bg-transparent relative rounded-radius-4xl w-full h-w-12 z-1 px-5 py-2 block transition-all   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6 focus:outline-none"
                />
                <p className="text-error-600">{errors.title?.message}</p>
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Autor
              </label>
              <div className="relative">
                <input
                  type="text"
                  {...register('author')}
                  className="border border-indigo-500  bg-transparent relative rounded-radius-4xl w-full h-w-12 z-1 px-5 py-2 block transition-all   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6 focus:outline-none"
                />
                <p className="text-error-600"> {errors.author?.message}</p>
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Contenido
              </label>
              <div className="relative">
                <textarea
                  style={{ resize: 'none' }}
                  {...register('content')}
                  className="border border-indigo-500 h-40  bg-transparent relative rounded-radius-4xl w-full h-w-12 z-1 px-5 py-2 block transition-all   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6 focus:outline-none"
                />
                <p className="text-error-600">{errors.content?.message}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 flex justify-end gap-x-2">
          <button
            disabled={loading}
            onClick={onCloseModal}
            type="button"
            className="px-5 py-2.5 h-10 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border  shadow-sm disabled:opacity-50 disabled:pointer-events-none focus:outline-none  bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700 focus:bg-neutral-700"
            data-hs-overlay="#hs-pro-dasadpm"
          >
            Cancel
          </button>

          <Button className="h-10" type="submit" disabled={loading}>
            Guardar
          </Button>
        </div>
      </form>
    </>
  );
};
