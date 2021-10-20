import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getAll, selectHeroes } from 'src/features/heroes/heroesSlice';
import { selectCount } from 'src/features/counter/counterSlice';

import NavbarMenu from 'src/molecules/Navbar';
import List from 'src/templates/List';

function Home() {
  const heroes = useAppSelector(selectHeroes);
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(heroes);
  }, []);

  return (
    <div>
      <NavbarMenu />
      <List />
    </div>
  );
}

export default Home;
