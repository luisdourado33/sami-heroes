import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Hero } from './heroes.types';
import { fetchHeroes } from './heroesAPI';

export interface HeroState {
  hero: Hero,
  heroes?: Hero[]
};

const initialState: HeroState = {
  hero: {
    id: "",
    name: "",
    powerstats: {
      strength: "",
      speed: "",
      intelligence: "",
      durability: "",
      power: "",
      combat: "",
    },

    biography: {
      "full-name": "",
      "alter-egos": "",
      aliases: [],
      "place-of-birth": "",
      "first-appearance": "",
      publisher: "",
      alignment: "",
    },

    appearance: {
      gender: "",
      race: "",
      height: [],
      weight: [],
    },

    work: {
      occupation: "",
      base: "",
    },

    connections: {
      "group-affiliation": "",
      relatives: "",
    },

    image: {
      url: "",
    },
  },
  heroes: []
};

export const fetchAllHeroes = createAsyncThunk(
  'heroes/fetchAllHeroes',
  async () => {
    const response: any = await fetchHeroes();

    return response.data.results;
  }
);

export const heroesSlice = createSlice({
  name: 'heroesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllHeroes.fulfilled, (state, action) => {
      state.heroes = action.payload;
    })
  }
});

export const selectHero = (currentState: RootState) => currentState.state;

export default heroesSlice.reducer;