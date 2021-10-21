import React from 'react';
import './styles.scss';

import { Hero } from 'src/features/heroes/heroes.types';

import CardImage from 'src/components/atoms/CardImage';
import ImageContainer from 'src/components/atoms/ImageContainer';

interface IProps {
  hero?: Hero;
  showDetails?: boolean;
  getHero?: (item: Hero) => void;
}

function getClassIcon(statKey: string): string {
  switch (statKey) {
    case 'intelligence':
      return 'fa-solid fa-brain';
      break;
    case 'strength':
      return 'fa-solid fa-dumbbell';
      break;
    case 'speed':
      return 'fa-solid fa-person-running';
      break;
    case 'durability':
      return 'fa-solid fa-shield-blank';
      break;
    case 'power':
      return 'fa-solid fa-bolt';
      break;
    case 'combat':
      return 'fa-solid fa-hand-fist';
      break;
    default:
      break;
  }
}

function getStats(statsObject: {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}): any[] {
  let stats = [];

  for (const key in statsObject) {
    stats.push({
      stat: key,
      value: statsObject[key] ?? '-',
      class: getClassIcon(key),
    });
  }

  return stats;
}

const CardScope: React.FC<IProps> = ({ getHero, hero, showDetails = true }) => {
  return (
    <div className='scope-card'>
      <ImageContainer>
        <CardImage src={String(hero.image?.url)} />
      </ImageContainer>
      <div>
        <div className='stats-row'>
          {getStats(hero?.powerstats).map(
            (item: { stat: string; value: string; class: string }) => (
              <div className='stat-item' key={item.stat}>
                <i className={item.class}></i>
                <span className='stat-label'>{item.value}</span>
              </div>
            )
          )}
        </div>
        <h1>{hero?.name}</h1>
        <p className='full-name'>
          {hero?.biography['full-name'] !== ''
            ? hero?.biography['full-name']
            : 'Full name not specified'}
        </p>
      </div>
      <div className='action-row'>
        <p className='description'>{hero?.work.occupation}</p>
      </div>
      {showDetails && (
        <button className='button-details' onClick={() => getHero(hero)}>
          <span className='button-label'>
            <i className='fa-solid fa-plus'></i> See details
          </span>
        </button>
      )}
    </div>
  );
};

export default CardScope;
