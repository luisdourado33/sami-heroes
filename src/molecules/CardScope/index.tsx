import React from 'react';
import './styles.scss';

import CardImage from 'src/atoms/CardImage';
import ImageContainer from 'src/atoms/ImageContainer';
import { Hero } from 'src/features/heroes/heroes.types';

interface IProps {
  hero?: Hero;
}

const CardScope = ({ hero }: IProps) => {
  return (
    <div className='scope-card'>
      <ImageContainer>
        <CardImage src={String(hero?.image.url)} />
      </ImageContainer>
      <h1>{hero?.name}</h1>
      <div className='action-row'>
        <p className='description'>
          Lorem Ipsum sit amet dolor amet dolor amet dolor amet dolor amet dolor
          Lorem Ipsum sit amet dolor amet dolor amet dolor amet dolor amet dolor
        </p>
      </div>
      <button className='button-details'>
        <span className='button-label'>
          <i className='fa-solid fa-plus'></i> See details
        </span>
      </button>
    </div>
  );
};

export default CardScope;
