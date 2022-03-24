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
    <section className="px-4 py-4 bg-gray-100 dark:bg-gray-800">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {pokemons.map(({ data }) => (
          <div
            key={data.id}
            className="max-w-sm rounded-xl bg-white dark:bg-gray-900 overflow-hidden shadow-lg"
          >
            <img
              className="w-auto mx-auto mt-4 rounded-lg bg-gray-200 dark:bg-gray-700"
              src={data.sprites.front_default}
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pokemons;