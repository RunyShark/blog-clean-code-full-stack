import React from 'react';
import { Button, Modal, Text, Title } from '../../../../../ui';
import { IoClose } from 'react-icons/io5';

interface ModalDeleteAccountProps {
  title: string;
  description: string;
  isOpen: boolean;
  handlerCloseModal: () => void;
  handlerDeleteBlog: () => void;
}

export const ModalDeleteAccount: React.FC<ModalDeleteAccountProps> = ({
  isOpen,
  title,
  description,
  handlerCloseModal,
  handlerDeleteBlog,
}) => (
  <Modal isOpen={isOpen} onClose={handlerCloseModal}>
    <div className="flex flex-row gap-4 justify-between mb-11">
      <Title fontSize="text-xl">{title}</Title>

      <Button
        onClick={handlerCloseModal}
        style={{
          borderRadius: '999px',
        }}
      >
        <IoClose size={20} />
      </Button>
    </div>
    <div className="flex flex-col w-full h-40 flex-1  items-center justify-between">
      <Text>{description}</Text>

      <div className="flex flex-row w-full justify-between">
        <Button onClick={handlerCloseModal} variant="primary">
          Cancelar
        </Button>
        <Button onClick={handlerDeleteBlog} variant="secondary">
          <Text color="#000">Eliminar</Text>
        </Button>
      </div>
    </div>
  </Modal>
);
