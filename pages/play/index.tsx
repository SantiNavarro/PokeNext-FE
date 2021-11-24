import type { NextPage } from "next";
import { getPokemonBatch } from '../../src/api/pokeapi';
import axios from 'axios';

interface Pokemon {
  name: string;
  url: string;
}

interface PlayProps {
  pokemons: Pokemon[];
}

const Play = ({pokemons}:PlayProps ) => {
  return pokemons.map(p => <div key={p.name}>{p.name}</div>);

}

Play.getInitialProps = async (ctx) => {
  const startIdx = Math.floor(Math.random() * 101);
  const limit = 50;
  const response = await getPokemonBatch(startIdx, limit);
  return {pokemons: response.results};
}

export default Play;