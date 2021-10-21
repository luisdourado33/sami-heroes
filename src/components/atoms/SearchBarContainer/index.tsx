import React, { FC } from 'react';
import './styles.scss';

const SearchBarContainer: FC<{}> = ({ children }) => {
  return <div className='search-bar-container'>{children}</div>;
};

export default SearchBarContainer;
