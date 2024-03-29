import * as React from 'react';
import './styles.scss';

interface BrandProps {
  title?: string;
}

const Brand = ({ title }: BrandProps) => {
  return (
    <h1 className='heading-brand'>
      <i className='fa-solid fa-atom'></i>
      {title ?? 'sami • heroes'}
    </h1>
  );
};

export default Brand;
