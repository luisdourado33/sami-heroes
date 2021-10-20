import React from 'react';
import './styles.scss';

import CardImage from 'src/atoms/CardImage';
import ImageContainer from 'src/atoms/ImageContainer';

const CardScope = () => {
  return (
    <div className='scope-card'>
      <ImageContainer>
        <CardImage src='https://www.superherodb.com/pictures2/portraits/10/100/639.jpg' />
      </ImageContainer>
      <h1>Hulk</h1>
      <p>Lorem Ipsum sit amet dolor</p>
    </div>
  );
};

export default CardScope;
