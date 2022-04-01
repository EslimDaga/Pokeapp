import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        setPokemon(res.data);
      })
  },[name])

  return (
    <>
      <div>{pokemon.name}</div>
      <div>{pokemon.id}</div>
    </>
  )
}

export default Pokemon