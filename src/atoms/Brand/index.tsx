import * as React from 'react';

interface BrandProps {
  title?: string;
}

const Brand = ({ title }: BrandProps) => {
  return <h1>{title ?? 'sami • heroes'}</h1>;
};

export default Brand;
