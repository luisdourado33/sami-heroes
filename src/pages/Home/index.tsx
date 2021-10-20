import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import {
  selectHero,
  fetchAllHeroes
} from 'src/features/heroes/heroesSlice';

import List from 'src/templates/List';

function Home() {
  const state = useAppSelector(selectHero);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllHeroes());
  }, []);

  return (
    <div>
      <List heroes={state.heroes} />
    </div>
  );
}

export default Home;
