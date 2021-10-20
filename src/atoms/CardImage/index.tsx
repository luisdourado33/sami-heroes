import React from 'react';
import './styles.scss';

type IProps = { src: string };

const CardImage = ({ src }: IProps) => {
  return (
    <div className='image-container'>
      <img src={src} alt='' className='image-properties' />
    </div>
  );
};

export default CardImage;
