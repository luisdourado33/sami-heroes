import React, { FC, InputHTMLAttributes } from 'react';
import './styles.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
}

const SearchBarInput: FC<InputProps> = (props) => {
  return <input className='search-bar-input' {...props} />;
};

export default SearchBarInput;
