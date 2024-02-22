/* eslint-disable @typescript-eslint/no-explicit-any */

import { useRef } from 'react';

import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface UseFormBlogProps {
  validations: any;
}

export const useFormBlog = <T extends FieldValues>({
  validations,
}: UseFormBlogProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<T>({
    resolver: yupResolver(validations) as any, // Add 'as any' to bypass type checking
  });

  const inputElement = useRef<HTMLInputElement>(null);

  const upLoadPhoto = () => inputElement.current?.click();

  return {
    loading: false,
    errors,
    upLoadPhoto,
    inputElement,
    register,
    handleSubmit,
    reset,
  };
};
