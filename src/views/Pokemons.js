import axios from "axios";
import { useEffect, useState } from "react";

const Pokemons = () => {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100")
    .then(response => {
      const promises = response.data.results.map(item => axios.get(item.url));
      Promise.all(promises).then((result) => {
        setPokemons(result);
      })
    })
  },[])

  return (
    <div>
      <ul>
        {pokemons.map(({data}) => (
          <>
            <img src={data.sprites.back_default} alt={data.name} />
            <li>{data.name}</li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Pokemons;