import React from 'react';
import './styles.scss';

export type INavItem = {
  id: number;
  label: string;
  url?: string;
};

const NavbarItem = ({ label, url = '/' }: INavItem) => {
  return (
    <a className='nav-item' href={url}>
      {label}
    </a>
  );
};

export default NavbarItem;
