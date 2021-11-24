import Image from "next/image";
import { useEffect, useState } from "react";
import {
  getPokemonBatch,
  getPokemonById,
  getPokemonByName,
} from "../../src/api/pokeapi";

import "tailwindcss/tailwind.css";
interface BasePokemon {
  name: string;
  url: string;
}

interface Pokemon extends BasePokemon {
  sprites: { front_default: string };
  id: number;
}

const Play = () => {
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [id, setId] = useState(1);

  const handleNextPokemonFetching = () => {
    const nextPokemonId = Math.floor(Math.random() * 150);

    setId(nextPokemonId);
  };
  useEffect(() => {
    const fetchNextPokemon = async () => {
      const nextPokemon = await getPokemonById(id);
      setCurrentPokemon(nextPokemon);
    };
    fetchNextPokemon();
  }, [id]);

  return (
    <div className="ml-3">
      {console.log(currentPokemon?.sprites?.back_default)}
      <p className="text-sm font-medium text-gray-900">
        Pokemon Name: {currentPokemon?.name}
      </p>
      <img
        className="h-10 w-10 rounded-full"
        src={currentPokemon?.sprites?.front_default}
        alt={currentPokemon?.name || ""}
      />
      <button
        className="p-2 pl-5 pr-5 bg-transparent border-2 border-green-500 text-green-500 text-lg rounded-lg hover:bg-green-500 hover:text-gray-100 focus:border-4 focus:border-green-300"
        onClick={handleNextPokemonFetching}
      >
        Next pokemon
      </button>
    </div>
  );
};

export default Play;
