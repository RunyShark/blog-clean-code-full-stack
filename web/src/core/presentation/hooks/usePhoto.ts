import React, { useState } from 'react';

export const usePhoto = () => {
  const [updatePhoto, setUpdatePhoto] = useState('');
  const [file, setFile] = useState<File>();

  const processPreview: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (!event.target.files?.length) return;

    const file = event.target.files?.[0];

    setFile(file);

    const reader = new FileReader();

    reader.onloadend = () =>
      typeof reader.result === 'string' && setUpdatePhoto(reader.result);

    if (file) reader.readAsDataURL(file);
  };

  const resetPhoto = () => {
    setUpdatePhoto('');
    setFile(undefined);
  };

  return { updatePhoto, file, processPreview, resetPhoto };
};
