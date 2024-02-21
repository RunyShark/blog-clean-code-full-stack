import * as yup from 'yup';
import { AddNewBlogFormProps } from '../components';
import { useRef, useState } from 'react';

import { usePhoto } from '../../../../../hooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type Inputs = {
  title: string;
  author: string;
  content: string;
};
const schema = yup
  .object({
    title: yup
      .string()
      .min(3, 'El título debe tener por lo menos 3 caracteres')
      .required('El título es requerido'),
    author: yup
      .string()
      .min(3, 'El autor debe tener por lo menos 3 caracteres')
      .required('El autor es requerido'),
    content: yup
      .string()
      .min(10, 'El contenido debe tener por lo menos 10 caracteres')
      .required('El contenido es requerido'),
  })
  .required();

export const useFormBlog = ({ onCloseModal }: AddNewBlogFormProps) => {
  const [postBlogError, setPostBlogError] = useState('');
  // const {
  //   fetchControl: { loading },
  // } = useAppSelector(({ web }) => web);
  // const dispatch = useAppDispatch();
  const { updatePhoto, file, processPreview, resetPhoto } = usePhoto();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    reset();
  };

  const inputElement = useRef<HTMLInputElement>(null);

  const upLoadPhoto = () => inputElement.current?.click();

  return {
    postBlogError,
    loading: false,
    errors,
    updatePhoto,
    processPreview,
    resetPhoto,
    upLoadPhoto,
    inputElement,
    register,
    handleSubmit,
    onSubmit,
  };
};
