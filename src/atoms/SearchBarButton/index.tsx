import React, { ButtonHTMLAttributes } from 'react';
import './styles.scss';

const SearchBarButton: React.FC<ButtonHTMLAttributes<{}>> = (props) => {
  return (
    <button className='search-bar-button' {...props}>
      <i className='fa-solid fa-search'></i>
    </button>
  );
};

export default SearchBarButton;
