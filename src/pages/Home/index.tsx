import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getAll, selectHeroes } from 'src/features/heroes/heroesSlice';

import NavbarMenu from 'src/molecules/Navbar';
import List from 'src/templates/List';

function Home() {
  const heroes = useAppSelector(selectHeroes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(heroes);
  }, []);

  return (
    <div>
      <NavbarMenu />
      <h1>Quantidade de heroes: {heroes.length}</h1>
      <List />
    </div>
  );
}

export default Home;
