export const gifs = [
  'https://res.cloudinary.com/runyshark1/image/upload/v1707709239/IF6S_b2b4wx.gif',
  'https://res.cloudinary.com/runyshark1/image/upload/v1707709239/IF6S_b2b4wx.gif',
  'https://res.cloudinary.com/runyshark1/image/upload/v1707709239/iM5_fxprc2.gif',
  'https://res.cloudinary.com/runyshark1/image/upload/v1707709239/7V7_1_bgbgrc.gif',
  'https://res.cloudinary.com/runyshark1/image/upload/v1707709239/VNc8_uvpnq9.gif',
  'https://res.cloudinary.com/runyshark1/image/upload/v1707709239/EHil_byjs4o.gif',
];
interface InputProps {
  label: string;
  type: string;
  key: string;
}

export const inputsRegister: InputProps[] = [
  {
    label: 'Nombre',
    type: 'text',
    key: 'firstName',
  },
  {
    label: 'Apellido',
    type: 'text',
    key: 'lastName',
  },
  {
    label: 'Correro electronico',
    type: 'email',
    key: 'email',
  },
  {
    label: 'Contraseña',
    type: 'password',
    key: 'password',
  },
];

export const inputsProfile: InputProps[] = [
  {
    label: 'Nombre',
    type: 'text',
    key: 'firstName',
  },
  {
    label: 'Apellido',
    type: 'text',
    key: 'lastName',
  },
];

export const inputsLogin: InputProps[] = [
  {
    label: 'Correro electronico',
    type: 'email',
    key: 'email',
  },
  {
    label: 'Contraseña',
    type: 'password',
    key: 'password',
  },
];
