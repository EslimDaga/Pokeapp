import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { SearchCircleIcon, XCircleIcon, ArrowCircleLeftIcon, ArrowCircleRightIcon } from "@heroicons/react/solid";
import { Grid } from "react-loader-spinner";

const ClearInput = styled.div`
  position: absolute;
  top: 1rem;
  left: 0.75rem;
  cursor: pointer;
`

const Pokemons = () => {

  const [listPokemons, setListPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [paging, setPaging] = useState({});
  const [loading, setLoading] = useState(true);
  const [link, setLink] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );

  useEffect(() => {
    setLoading(true)
    axios.get(link)
    .then(response => {
      setPaging({
        previous: response.data.previous,
        next: response.data.next
      })
      const promises = response.data.results.map(item => axios.get(item.url));
      Promise.all(promises).then((result) => {
        setPokemons(result);
        setListPokemons(result);
        setLoading(false);
      })
    })
  },[link])

  const handleChange = e => {
    setFiltering(e.target.value);
    filterPokemon(e.target.value)
  }

  const filterPokemon = (search_value) => {
    let resultSearch = listPokemons.filter((element) => {
      return element.data.name
        .toLowerCase()
        .includes(search_value.toLowerCase());
    });
    setPokemons(resultSearch)
  }

  const clearFilter = () => {
    setFiltering("");
    setPokemons(listPokemons);
  }

  const previousPage = (previous) => {
    setLink(previous)
  }

  const nextPage = (next) => {
    setLink(next)
  }

  return (
    <section className="flex-1 overflow-y-auto px-4 py-4 bg-gray-100 dark:bg-gray-800">
      <div className="relative sm:flex md:flex lg:flex justify-between items-center mb-4">
        <div className="relative">
          <input
            type="text"
            className="w-full sm:w-64 md:w-64 lg-64 h-14 bg-white dark:bg-gray-900 placeholder:text-gray-600 text-gray-700 dark:text-white pr-8 pl-11 rounded-lg z-0 focus:shadow focus:outline-yellow-400 dark:focus:shadow dark:focus:outline-none font-fredoka font-normal"
            placeholder="Buscar Pokemon"
            value={filtering}
            onChange={handleChange}
          />
          {filtering.length > 0 ? (
            <ClearInput onClick={clearFilter}>
              <XCircleIcon className="w-6 h-6 text-red-500" />
            </ClearInput>
          ) : (
            <div className="absolute top-4 left-3">
              <SearchCircleIcon className="w-6 h-6 text-gray-600" />
            </div>
          )}
        </div>
        <div className="flex justify-center pt-4 sm:pt-0 md:pt-0 lg:pt-0">
          {filtering.length <= 0 && (
            <>
              <button
                onClick={() => previousPage(paging.previous)}
                disabled={paging.previous ? false : true}
                className={
                  !paging.previous ? "cursor-not-allowed opacity-50" : ""
                }
              >
                <ArrowCircleLeftIcon className="w-10 h-10 text-blue-800 dark:text-gray-600" />
              </button>
              <button
                onClick={() => nextPage(paging.next)}
                disabled={paging.next ? false : true}
                className={!paging.next ? "cursor-not-allowed opacity-50" : ""}
              >
                <ArrowCircleRightIcon className="w-10 h-10 text-blue-800 dark:text-gray-600" />
              </button>
            </>
          )}
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-4/5">
          <Grid
            ariaLabel="loading-indicator"
            color="#1E40AF"
          />
        </div>
      ) : (
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
      )}
      {pokemons.length <= 0 && !loading && <div>No hasy</div>}
    </section>
  );
}

export default Pokemons;