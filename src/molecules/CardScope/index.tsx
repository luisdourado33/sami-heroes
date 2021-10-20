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
      <h1>Hero</h1>
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
