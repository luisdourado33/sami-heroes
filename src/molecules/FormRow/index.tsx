import React from 'react';
import { Hero } from 'src/features/heroes/heroes.types';
import './styles.scss';

type Props = {
  label: string;
  value: any;
};
const FormRow = ({ label, value }: Props) => {
  return (
    <div className='form-row'>
      <h3>{label}:</h3>
      <p>{value ?? '-'}</p>
    </div>
  );
};

export default FormRow;
