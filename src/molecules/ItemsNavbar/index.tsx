import React from 'react';
import './styles.scss';

import NavbarItem, { INavItem } from 'src/atoms/NavbarItem';

interface IProps {
  items: INavItem[];
}

const ItemsNavbar = ({ items }: IProps) => {
  return (
    <div className='row'>
      {items.map((menuItem) => (
        <NavbarItem {...menuItem} key={menuItem.id} />
      ))}
    </div>
  );
};

export default ItemsNavbar;
