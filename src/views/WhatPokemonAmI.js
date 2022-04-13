import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PokemonCard = styled.div`
  cursor: pointer;
`;


const WhatPokemonAmI = () => {

  const navigate = useNavigate();

  const [randomPokemon, setRandomPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const random_number = Math.floor(Math.random() * (898 - 1 + 1) + 1);
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + random_number)
      .then((res) => {
        setRandomPokemon([res.data]);
        setLoading(false);
      });
  }, []);

  console.log(randomPokemon);

  return (
    <section className="flex-1 overflow-y-auto grid place-items-center px-4 py-4 bg-gray-100 dark:bg-gray-800">
      {loading ? (
        <div className="max-w-sm rounded-xl py-4 px-6 bg-white dark:bg-gray-900 overflow-hidden shadow-lg transform hover:scale-105">
          <div className="animate-pulse">
            <div className="mx-auto rounded-lg bg-slate-900 dark:bg-gray-700 h-40 w-40"></div>
            <div className="w-24 h-4 mt-4 mb-2 mx-auto bg-slate-200 dark:bg-gray-700 rounded"></div>
            <div className="w-28 sm:w-28 md:w-40 lg-48 h-6 mx-auto bg-slate-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      ) : (
        randomPokemon.map((data) => (
          <PokemonCard
            onClick={() => {
              navigate(`/pokemon/${data.name}`);
            }}
            key={data.id}
            className="max-w-sm rounded-xl bg-white dark:bg-gray-900 overflow-hidden shadow-lg transform hover:scale-105"
          >
            <img
              className="w-40 mx-auto mt-4 ml-4 mr-4 rounded-lg bg-gray-200 dark:bg-gray-700"
              src={data.sprites.other.home.front_default}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="text-gray-700 dark:text-white capitalize font-fredoka font-semibold text-center mb-2">
                {data.name}
              </div>
              <p className="text-gray-700 dark:text-white font-fredoka font-medium text-center">
                Experiencia : {data.base_experience}
              </p>
            </div>
          </PokemonCard>
        ))
      )}
    </section>
  );
};

export default WhatPokemonAmI;
