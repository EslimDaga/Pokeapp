import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pokemon from "../components/Pokemons/Pokemon";

const WhatPokemonAmI = () => {

  const navigate = useNavigate();

  const [randomPokemon, setRandomPokemon] = useState([]);

  useEffect(() => {
    const random_number = Math.floor(Math.random() * (898 - 1 + 1) + 1);
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + random_number)
      .then((res) => {
        setRandomPokemon([res.data]);
      });
  }, []);

  console.log(randomPokemon);

  return (
    <section className="flex-1 overflow-y-auto grid place-items-center px-4 py-4 bg-gray-100 dark:bg-gray-800">
      {randomPokemon.map((data) => (
        <Pokemon key={data.id} data={data} navigate={navigate} />
      ))}
    </section>
  );
};

export default WhatPokemonAmI;
