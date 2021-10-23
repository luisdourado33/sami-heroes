import React from 'react';
import './styles.scss';

import NavbarItem, { INavItem } from 'src/components/atoms/NavbarItem';

interface IProps {
  items: INavItem[];
}

const ItemsNavbar = ({ items }: IProps) => {
  return (
    <div className='row-navbar'>
      {items.map((menuItem) => (
        <NavbarItem {...menuItem} key={menuItem.id} />
      ))}
      <i className='fa-solid fa-bars sandwich'></i>
    </div>
  );
};

export default ItemsNavbar;
