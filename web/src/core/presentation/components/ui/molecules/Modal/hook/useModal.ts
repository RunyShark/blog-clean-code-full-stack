import React, { useEffect, useRef } from 'react';
import { ModalProps } from '..';

export const useModal = ({ isOpen, onClose }: Omit<ModalProps, 'children'>) => {
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleOutsideClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (
      modalContentRef.current &&
      !(modalContentRef.current as HTMLElement).contains(event.target as Node)
    ) {
      onClose();
    }
  };

  return {
    handleOutsideClick,
    modalContentRef,
  };
};
