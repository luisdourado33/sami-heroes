import React from 'react';
import './styles.scss';

type Props = {
  isOpen: boolean;
};

const Modal: React.FC<Props> = ({ isOpen, children }) => {
  if (isOpen) {
    return <div className='modal-container'>{children}</div>;
  }

  return <></>;
};

export default Modal;
