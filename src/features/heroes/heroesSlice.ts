import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Hero } from './heroes.types';
import { fetchHeroByName, fetchHeroByPower, fetchHeroes } from './heroesAPI';

export interface HeroState {
  heroes?: Hero[];
}

const initialState: HeroState = {
  heroes: [],
};

export const fetchAllHeroes = createAsyncThunk(
  'heroes/fetchAllHeroes',
  async () => {
    const response: any = await fetchHeroes();

    return response.data.results;
  }
);

export const fetchByName = createAsyncThunk(
  'heroes/fetchByName',
  async (heroName: string) => {
    const response: any = await fetchHeroByName(heroName);

    return response.data.results;
  }
);

export const fetchByPower = createAsyncThunk(
  'heroes/fetchByPower',
  async (power: string) => {
    const response: any = await fetchHeroByPower(power);

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
    });
    builder.addCase(fetchByName.fulfilled, (state, action) => {
      state.heroes = [];
      state.heroes = action.payload;
    });
    builder.addCase(fetchByPower.fulfilled, (state, action) => {
      state.heroes = [];
      state.heroes = action.payload;
    });
  },
});

export const selectHero = (currentState: RootState) => currentState.state;

export default heroesSlice.reducer;
