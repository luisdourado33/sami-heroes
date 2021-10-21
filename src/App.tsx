import React from 'react';
import './styles.scss';

import Routes from 'src/routes';
import NavbarMenu from 'src/components/molecules/Navbar';

const App = () => {
  return (
    <div className='main-container'>
      <NavbarMenu />
      <Routes />
    </div>
  );
};

export default App;
