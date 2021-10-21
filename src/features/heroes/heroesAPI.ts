import api from 'src/services/api';

/**
 * Get Heroes from API by first word name.
 * @returns Hero[]
 */
export const fetchHeroes = async () => {
  try {
    let response: any = await api.get('/search/A');

    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    throw new Error();
  }
};

/**
 * Get Hero by name.
 * @returns Hero
 */
export const fetchHeroByName = async (heroName: string) => {
  try {
    let response: any = await api.get('/search/' + heroName);

    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    throw new Error();
  }
};

/**
 * Get Hero by power.
 * @returns Hero
 */
export const fetchHeroByPower = async (power: string) => {
  try {
    let response: any = await api.get('/search/' + power);

    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    throw new Error();
  }
};
