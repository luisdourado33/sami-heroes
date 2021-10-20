import api from "src/services/api";

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