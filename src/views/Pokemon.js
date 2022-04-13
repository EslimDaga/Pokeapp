import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProgressBar from "react-customizable-progressbar";
import { ThemeContext } from "../contexts/ThemeContext";
import Profile from "../components/Pokemons/Pokemon/Profile";
import Images from "../components/Pokemons/Pokemon/Images";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [openTab, setOpenTab] = useState(1);
  const { name } = useParams();

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        setPokemon([res.data]);
      })
  },[name]);

  console.log(theme);

  return (
    <div className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-800">
      {pokemon.map((item) => (
        <div key={item.id} className="w-full px-4">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "font-fredoka font-medium capitalize px-5 py-3 shadow-lg rounded-md block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-blue-800"
                    : "text-gray-500 dark:text-gray-300 bg-white dark:bg-gray-900")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#profile"
                role="tablist"
              >
                Perfil
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "font-fredoka font-medium capitalize px-5 py-3 shadow-lg rounded-md block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-blue-800"
                    : "text-gray-500 dark:text-gray-300 bg-white dark:bg-gray-900")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#images"
                role="tablist"
              >
                Imágenes
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-900 w-full mb-6 shadow-lg rounded-xl">
            <div className="px-4 py-4 flex-auto">
              <div className="tab-content tab-space">
                <Profile openTab={openTab} item={item} theme={theme} />
                <Images openTab={openTab} item={item} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pokemon