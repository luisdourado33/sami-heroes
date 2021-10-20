import React from 'react';
import './styles.scss';

import Brand from 'src/atoms/Brand';
import ItemsNavbar from '../ItemsNavbar';

const itemsNavbar = [
  { id: 0, label: 'Home', url: '/' },
  { id: 1, label: 'All heroes', url: '/all' },
  { id: 2, label: 'About', url: '/about' },
];

const NavbarMenu = () => {
  return (
    <div className='container'>
      <Brand title='HeroesAPI' />
      <ItemsNavbar items={itemsNavbar} />
      <i className='fa-solid fa-search'></i>
    </div>
  );
};

export default NavbarMenu;
