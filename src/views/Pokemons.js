import axios from "axios";
import { useEffect, useState } from "react";
import { SearchCircleIcon } from "@heroicons/react/solid";

const Pokemons = () => {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
    .then(response => {
      const promises = response.data.results.map(item => axios.get(item.url));
      Promise.all(promises).then((result) => {
        setPokemons(result);
      })
    })
  },[])

  return (
    <section className="flex-1 overflow-y-auto px-4 py-4 bg-gray-100 dark:bg-gray-800">
      <div className="relative mb-4">
        <input
          type="text"
          className="w-full sm:w-full md:w-64 lg-64 h-14 bg-white dark:bg-gray-900 text-gray-400 dark:text-white pr-8 pl-11 rounded-lg z-0 focus:shadow focus:outline-yellow-400 dark:focus:shadow dark:focus:outline-none font-fredoka font-normal"
          placeholder="Buscar Pokemon"
        />
        <div className="absolute top-4 left-3">
          <SearchCircleIcon className="w-6 h-6 text-gray-400" />
        </div>
      </div>
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