import React from 'react';
import './styles.scss';

const ModalContent: React.FC<{}> = ({ children }) => {
  return <div className='modal-content'>{children}</div>;
};

export default ModalContent;
