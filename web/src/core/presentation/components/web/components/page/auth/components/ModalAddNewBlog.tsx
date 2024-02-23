import React from 'react';
import { Button, Modal, Title } from '../../../../../ui';
import { IoClose } from 'react-icons/io5';
import { AddNewBlog } from '../../../../../ui/molecules/addNewBlog';

interface ModalAddNewBlogProps {
  isOpen: boolean;
  handlerCloseModal: () => void;
}

export const ModalAddNewBlog: React.FC<ModalAddNewBlogProps> = ({
  isOpen,
  handlerCloseModal,
}) => (
  <Modal isOpen={isOpen} onClose={handlerCloseModal}>
    <div className="flex flex-row gap-4 justify-between">
      <Title fontSize="text-xl">Postear Blog</Title>
      <Button
        onClick={handlerCloseModal}
        style={{
          borderRadius: '999px',
        }}
      >
        <IoClose size={20} />
      </Button>
    </div>
    <AddNewBlog />
  </Modal>
);
