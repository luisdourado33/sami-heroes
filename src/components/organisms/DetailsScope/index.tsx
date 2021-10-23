import React from 'react';
import './styles.scss';

import { Hero } from 'src/features/heroes/heroes.types';
import FormRow from '../../molecules/FormRow';

type Props = { hero: Hero };

const DetailsScope = ({ hero }: Props) => {
  return (
    <div className='details-container'>
      {/* <h1>Details (Press ESC to close)</h1> */}
      <div className='cards-wrapper'>
        <FormRow label='Full Name' value={hero.biography['full-name']} />
        <FormRow
          label='Place of Birth'
          value={hero.biography['place-of-birth']}
        />
        <FormRow label='Gender' value={hero.appearance['gender']} />
        <FormRow label='Alter Ego' value={hero.biography['alter-egos']} />
        <FormRow
          label='First Appearance'
          value={hero.biography['first-appearance']}
        />
        <FormRow label='Alignment' value={hero.biography['alignment']} />
        <FormRow label='Publisher' value={hero.biography['publisher']} />
        <FormRow
          label='Group Affiliation'
          value={hero.connections['group-affiliation']}
        />
        <FormRow label='Relatives' value={hero.connections['relatives']} />
        <FormRow label='Occupation' value={hero.work['occupation']} />
        <FormRow label='Work Base' value={hero.work['base']} />
        <FormRow label='Height' value={hero.appearance['height']} />
        <FormRow label='Weight' value={hero.appearance['weight']} />
        <FormRow label='Race' value={hero.appearance['race']} />
      </div>
    </div>
  );
};

export default DetailsScope;
