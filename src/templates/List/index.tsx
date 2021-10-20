import React from 'react';
import './styles.scss';

import { Hero } from 'src/features/heroes/heroes.types';
import CardScope from 'src/molecules/CardScope';

interface IProps {
  heroes?: Hero[]
};

const List = ({ heroes }: IProps) => {
  return (
    <div className='container'>
      <div className='grid'>
        {heroes?.map(hero => (
          <CardScope hero={hero} key={hero.id}/>
        ))}
      </div>
    </div>
  );
};

export default List;
