import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputFilterPokemon from "../components/common/InputFilterPokemon";
import ButtonPaddingPokemons from "../components/common/ButtonPaddingPokemons";
import LoaderPokemons from "../components/common/LoaderPokemons";
import Pokemon from "../components/Pokemons/Pokemon";

const Pokemons = () => {

  const navigate = useNavigate();

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
        <InputFilterPokemon
          filtering={filtering}
          handleChange={handleChange}
          clearFilter={clearFilter}
        />
        <ButtonPaddingPokemons
          filtering={filtering}
          previousPage={previousPage}
          nextPage={nextPage}
          paging={paging}
        />
      </div>
      {loading ? (
        <LoaderPokemons />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {pokemons.map(({ data }) => (
            <Pokemon key={data.id} navigate={navigate} data={data} />
          ))}
        </div>
      )}
      {pokemons.length <= 0 && !loading && <div className="font-fredoka font-medium">No se han encontrado coincidencias.</div>}
    </section>
  );
}

export default Pokemons;