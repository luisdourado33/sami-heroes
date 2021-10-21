import React, { ButtonHTMLAttributes } from 'react';
import './styles.scss';

const SearchBarResetList: React.FC<ButtonHTMLAttributes<{}>> = (props) => {
  return (
    <button className='search-bar-reset-button' {...props}>
      <i className='fa-solid fa-arrow-rotate-right'></i>
      <span className='reset-label'>Reset List</span>
    </button>
  );
};

export default SearchBarResetList;
