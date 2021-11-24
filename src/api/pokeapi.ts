import axios from 'axios';

const axiosInstance = () => axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  headers: { 'Content-Type': 'application/json' },
});

export const getPokemonByName = async (name: string) => {
  const pokeInstance = axiosInstance();
  const res = await pokeInstance.get(`pokemon/${name}`);
  return res.data;
}

export const getPokemonById = async (id: number) => {
  const pokeInstance = axiosInstance();
  const res = await pokeInstance.get(`pokemon/${id}`);
  return res.data;
}

export const getPokemonBatch = async (quantity: number, startIdx: number) => {
  const pokeInstance = axiosInstance();
  const res = await pokeInstance.get(`pokemon?limit=${quantity}&offset=${startIdx}`);
  return res.data;
}