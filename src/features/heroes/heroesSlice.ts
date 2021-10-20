import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from 'src/services/api';
import { RootState, AppThunk } from '../../app/store';

export interface HeroesState {
  value: any;
}

const initialState: HeroesState = {
  value: getAll(),
};

export async function getAll() {
  try {
    let req: any = await api.get('/1');

    if (req.status === 200) {
      if (req.data?.response === 'success') {
        let hero = req.data;

        return [hero];
      }
    } else {
      return [];
    }
  } catch (error) {}
}

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState,

  reducers: {
    getByName: () => {},
    getByPower: () => {},
  },
});

export const selectHeroes = (state: RootState) => state.heroes.value;

export default heroesSlice.reducer;
