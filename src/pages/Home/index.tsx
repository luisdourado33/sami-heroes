import React, { useEffect } from 'react';
import './styles.scss';

import { useAppSelector, useAppDispatch } from 'src/app/hooks';
import { selectHero, fetchAllHeroes } from 'src/features/heroes/heroesSlice';

import List from 'src/templates/List';

function Home() {
  const state = useAppSelector(selectHero);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllHeroes());
  }, []);

  return (
    <>
      <List heroes={state.heroes} />
    </>
  );
}

export default Home;
