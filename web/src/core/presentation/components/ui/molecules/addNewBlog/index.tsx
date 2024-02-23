/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import { Button, Input, Text, UploadPhoto } from '../../../ui';

import * as yup from 'yup';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { useAppDispatch } from '../../../../store';
import { webThunk } from '../../../../store/slices/web/web-thunk';
import { useFormBlog } from '../../../../hooks';
import { UpdateBlogDto } from '../../../../../domain/dto';

type Inputs = {
  title: string;
  author: string;
  content: string;
};

const schema = yup
  .object({
    title: yup.string().required('El titulo es requerido'),
    content: yup.string().required('El contenido es requerido'),
  })
  .required();

interface OptionalProps {
  photoURL: string;
  initialValues: any;
  textButton: string;
  onChange: (value: Omit<UpdateBlogDto, 'blogId'>) => void;
}

interface AddNewBlogProps extends Partial<OptionalProps> {}

export const AddNewBlog: React.FC<Partial<AddNewBlogProps>> = ({
  photoURL = '',
  initialValues,
  textButton = 'Crear blog',
  onChange,
}) => {
  const dispatch = useAppDispatch();
  const [photoProfile, setPhotoProfile] = useState<string>(photoURL);
  const [isLoadingUploadPhoto, setIsLoadingUploadPhoto] = useState(false);
  const { loading, errors, register, handleSubmit, reset } =
    useFormBlog<Inputs>({
      validations: schema,
      values: initialValues,
    });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (onChange) {
      onChange({
        title: data.title,
        content: data.content,
        imgUrl: photoProfile,
      });
      return;
    }

    dispatch(
      webThunk.createNewPost({
        title: data.title,
        content: data.content,
        imgUrl: photoProfile,
      })
    );

    reset();

    navigate(`/home/blog/${data.title.split(' ').join('-')}`);
  };

  return (
    <>
      <article className="flex w-full  justify-between gap-20 relative">
        <form
          className="md:w-[500px]  h-full justify-center items-center flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="p-4 w-full">
            <div className="space-y-5">
              <div>
                <Text className="mb-3">Foto del blog</Text>
                <UploadPhoto
                  photoURL={photoURL}
                  onFileChange={setPhotoProfile}
                  isLoading={setIsLoadingUploadPhoto}
                />
                <Text className="mt-3" color="grey">
                  La foto es un campo opcional
                </Text>
              </div>

              <Input
                label="Titulo"
                type="text"
                error={errors.title?.message}
                useForm={register('title')}
              />

              <div className="relative">
                <textarea
                  style={{ resize: 'none' }}
                  {...register('content')}
                  className="border border-indigo-500 h-40  bg-transparent relative rounded-md w-full h-w-12 z-1 px-5 py-2 block transition-all   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6 focus:outline-none"
                />
                <p className="text-error-600">{errors.content?.message}</p>
              </div>
            </div>
          </div>

          <div className="p-4 flex flex-col justify-end gap-x-2 w-full gap-4">
            <Button
              className="h-10"
              type="submit"
              disabled={loading || isLoadingUploadPhoto}
            >
              {textButton}
            </Button>
          </div>
        </form>
      </article>
    </>
  );
};
