import React from 'react';
import './styles.scss';

import CardScope from 'src/components/molecules/CardScope';
import { Hero } from 'src/features/heroes/heroes.types';

interface IProps {
  hero?: Hero;
}

const HeroCard = () => {
  return (
    <div>
      <CardScope />
    </div>
  );
};

export default HeroCard;
