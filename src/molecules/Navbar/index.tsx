import React from 'react';
import './styles.scss';

import Brand from 'src/atoms/Brand';
import ItemsNavbar from '../ItemsNavbar';

const itemsNavbar = [
  { id: 0, label: 'Home', url: '/' },
  {
    id: 0,
    label: 'GitHub',
    url: 'https://github.com/luisdourado33/sami-heroes',
  },
  { id: 2, label: 'About', url: '/about' },
];

const NavbarMenu = () => {
  return (
    <div className='container'>
      <Brand title='Sami-Heroes' />
      <ItemsNavbar items={itemsNavbar} />
    </div>
  );
};

export default NavbarMenu;
