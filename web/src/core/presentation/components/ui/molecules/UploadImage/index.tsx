import React, { useEffect, useRef } from 'react';
import { IoCloudUpload } from 'react-icons/io5';
import { Button } from '../Button';
import { usePhoto } from '../../../../hooks';

interface UploadPhotoProps {
  onFileChange: (url: string) => void;
  isLoading: (value: boolean) => void;
}

export const UploadPhoto: React.FC<UploadPhotoProps> = ({
  onFileChange,
  isLoading,
}) => {
  const { updatePhoto, file, processPreview } = usePhoto();
  const inputRef = useRef<HTMLInputElement>(null);

  const upLoadPhoto = () => {
    inputRef.current?.click();
  };

  const uploadPhoto = async (file: File) => {
    const body = new FormData();
    body.append('upload_preset', 'next-blog');
    body.append('file', file);
    isLoading(true);
    const response = await fetch(
      'https://api.cloudinary.com/v1_1/runyshark1/upload',
      {
        method: 'POST',
        body,
        cache: 'no-cache',
      }
    );
    const data = await response.json();
    isLoading(false);
    onFileChange(data.url);
  };

  useEffect(() => {
    if (!file) return;
    uploadPhoto(file);
  }, [file]);

  return (
    <div className="mt-2 flex items-center gap-x-3 w-full justify-between">
      <span
        className="flex justify-center items-center h-20 w-20 border-2 border-dotted  rounded-full border-neutral-700 text-neutral-600 cursor-pointer"
        onClick={upLoadPhoto}
      >
        {updatePhoto ? (
          <img
            src={updatePhoto}
            alt="preview"
            width={100}
            height={100}
            className="rounded-full object-contain object-center w-full h-full"
          />
        ) : (
          <svg
            className="flex-shrink-0 w-7 h-7 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        )}

        <input
          className="opacity-0 hidden"
          type="file"
          ref={inputRef}
          onChange={processPreview}
        />
      </span>

      <div>
        <Button
          type="button"
          iconLeft={<IoCloudUpload size={25} />}
          onClick={upLoadPhoto}
        >
          Selecionar foto
        </Button>
      </div>
    </div>
  );
};
