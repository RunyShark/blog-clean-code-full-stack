import * as yup from 'yup';

export const registerSchema = yup
  .object({
    email: yup
      .string()
      .email('El correo electronico no es valido')
      .required('El correo electronico es requerido'),
    password: yup
      .string()
      .required('La contraseña es requerida')
      .min(6, 'La contraseña debe tener al menos 6 caracteres'),
    firstName: yup.string().required('El nombre es requerido'),
    lastName: yup.string().required('El apellido es requerido'),
  })
  .required();

export const profileSchema = yup
  .object({
    firstName: yup.string().required('El nombre es requerido'),
    lastName: yup.string().required('El apellido es requerido'),
  })
  .required();

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .email('El correo electronico no es valido')
      .required('El correo electronico es requerido'),
    password: yup
      .string()
      .required('La contraseña es requerida')
      .min(6, 'La contraseña debe tener al menos 6 caracteres'),
  })
  .required();
