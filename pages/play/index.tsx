import { useCallback, useEffect, useState } from "react";
import { getPokemonById } from "../../src/api/pokeapi";
import { getRandomPokemonId } from "../../src/utils";
import {
  ButtonStyled,
  ContainerStyled,
  GotchasCounter,
  ImageStyled,
  InputStyled,
} from "./styles";

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
  const [id, setId] = useState(getRandomPokemonId());
  const [inputName, setInputName] = useState("");
  const [gotchas, setGotchas] = useState(0);

  const fetchNextPokemonCallback = useCallback(() => {
    const fetchNextPokemon = async () => {
      const nextPokemon = await getPokemonById(id);
      setCurrentPokemon(nextPokemon);
    };
    fetchNextPokemon();
  }, [id]);

  const handleInputChange = (event) => {
    event.preventDefault();
    setInputName(event.target.value);
    if (
      event.target.value.toLowerCase() === currentPokemon.name.toLowerCase()
    ) {
      handleNextPokemonFetching();
      setInputName("");
      setGotchas(gotchas + 1);
    }
  };

  const handleNextPokemonFetching = () => {
    const nextPokemonId = getRandomPokemonId();

    setId(nextPokemonId);
  };
  useEffect(() => {
    fetchNextPokemonCallback();
  }, [id, gotchas, fetchNextPokemonCallback]);

  return (
    <ContainerStyled>
      <GotchasCounter>{gotchas}</GotchasCounter>
      {/* <p>Pokemon Name: {currentPokemon?.name}</p> */}
      <InputStyled value={inputName} onChange={handleInputChange} />
      <ImageStyled
        src={currentPokemon?.sprites?.front_default}
        alt={currentPokemon?.name || ""}
      />
      {console.log(`Gotchas: ${gotchas}`)}
      <ButtonStyled onClick={handleNextPokemonFetching}>
        Next pokemon
      </ButtonStyled>
    </ContainerStyled>
  );
};

export default Play;
