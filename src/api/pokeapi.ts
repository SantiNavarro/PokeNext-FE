import axios from 'axios';

// export const getPokemonByName = async (name: string) => {
//   const res = await apiInstance().get(`pokemon/${name}`);
//   return res.data;
// }

// export const getPokemonById = async (id: number) => {
//   const res = await apiInstance().get(`pokemon/${id}`);
//   return res.data;
// }

export const getPokemonBatch = async (quantity: number, startIdx:number) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${quantity}&offset=${startIdx}`);
  return res.data;
}