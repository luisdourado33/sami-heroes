import React, { useState } from 'react';
import './styles.scss';

import { useAppDispatch } from 'src/app/hooks';
import { fetchAllHeroes, fetchByName } from 'src/features/heroes/heroesSlice';

import SearchBarContainer from 'src/components/atoms/SearchBarContainer';
import SearchBarInput from 'src/components/atoms/SearchBarInput';
import SearchBarButton from 'src/components/atoms/SearchBarButton';
import SearchBarResetList from 'src/components/atoms/SearchBarResetList';

const optionsStyle: React.CSSProperties = {
  borderRadius: 15,
  padding: 5,
  backgroundColor: '#eee',
  borderColor: 'transparent',
};

const SearchBar = () => {
  const [name, setName] = useState('');
  const dispatch = useAppDispatch();

  return (
    <SearchBarContainer>
      <SearchBarInput
        placeholder='Search by Name'
        id='searchBarName'
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <SearchBarButton
        id='searchSubmit'
        onClick={() => dispatch(fetchByName(name))}
      />
      <SearchBarResetList
        id='searchReset'
        onClick={() => dispatch(fetchAllHeroes())}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
