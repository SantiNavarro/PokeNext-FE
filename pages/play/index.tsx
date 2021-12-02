import Image from "next/image";
import { useEffect, useState } from "react";
import {
  getPokemonBatch,
  getPokemonById,
  getPokemonByName,
} from "../../src/api/pokeapi";
import { ButtonStyled, ContainerStyled, ImageStyled, InputStyled } from "./styles"

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
    <ContainerStyled>
      {console.log(currentPokemon?.sprites?.back_default)}
      <p>
        Pokemon Name: {currentPokemon?.name}
      </p>
      <InputStyled/>
      <ImageStyled
        src={currentPokemon?.sprites?.front_default}
        alt={currentPokemon?.name || ""}
      />
      <ButtonStyled onClick={handleNextPokemonFetching}>
        Next pokemon
      </ButtonStyled>
    </ContainerStyled>
  );
};

export default Play;
