import React from 'react';
import './styles.scss';

const ImageContainer: React.FC<{}> = ({ children }) => {
  return <div className='container'>{children}</div>;
};

export default ImageContainer;
