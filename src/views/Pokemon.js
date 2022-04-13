import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProgressBar from "react-customizable-progressbar";
import { ThemeContext } from "../contexts/ThemeContext";

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
                <div
                  className={openTab === 1 ? "block" : "hidden"}
                  id="profile"
                >
                  <div className="block pb-4 sm:flex md:flex lg:flex text-3xl font-fredoka font-semibold capitalize items-center text-center text-gray-700 dark:text-white sm:text-4xl justify-between">
                    {item.name}
                    <div className="justify-center flex sm:flex md:flex lg:flex">
                      <img
                        src={item.sprites.front_default}
                        alt={item.sprites.front_default}
                        className="w-14 sm:w-14 md:w-14 lg:w-14"
                      />
                      <img
                        src={item.sprites.back_default}
                        alt={item.sprites.back_default}
                        className="w-14 sm:w-14 md:w-14 lg:w-14"
                      />
                      <img
                        src={item.sprites.front_shiny}
                        alt={item.sprites.front_shiny}
                        className="w-14 sm:w-14 md:w-14 lg:w-14"
                      />
                      <img
                        src={item.sprites.back_shiny}
                        alt={item.sprites.back_shiny}
                        className="w-14 sm:w-14 md:w-14 lg:w-14"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-y-6 lg:gap-x-4 justify-items-center">
                    {item.stats.map((stat) => (
                      <ProgressBar
                        key={stat.stat.name}
                        radius={50}
                        progress={stat.base_stat}
                        strokeWidth={18}
                        trackStrokeWidth={18}
                        strokeColor={theme === "dark" ? "#6b7280" : "#FDE047"}
                        trackStrokeColor={theme === "dark" ? "#1F2937" : "#F3F4F6"}
                        strokeLinecap="square"
                      >
                        <div className="text-center text-gray-500 dark:text-white capitalize font-fredoka font-medium">
                          {stat.stat.name}
                        </div>
                        <div className="text-center text-gray-500 dark:text-white font-fredoka font-semibold">
                          {stat.base_stat}
                        </div>
                      </ProgressBar>
                    ))}
                  </div>
                  <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    <div className="border-t border-gray-700 dark:border-gray-500 pt-4">
                      <dt className="font-fredoka font-medium text-gray-900 dark:text-white">
                        Habilidades
                      </dt>
                      {item.abilities.map(({ ability }) => (
                        <dd
                          key={ability.name}
                          className="font-fredoka mt-2 text-sm capitalize text-gray-500 dark:text-gray-200"
                        >
                          {ability.name}
                        </dd>
                      ))}
                    </div>
                    <div className="border-t border-gray-700 dark:border-gray-500 pt-4">
                      <dt className="font-fredoka font-medium text-gray-900 dark:text-white">
                        Tipos
                      </dt>
                      {item.types.map(({ type }) => (
                        <dd
                          key={type.name}
                          className="font-fredoka mt-2 capitalize text-gray-500 dark:text-gray-200"
                        >
                          {type.name}
                        </dd>
                      ))}
                    </div>
                  </dl>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="images">
                  <div className="grid grid-cols-2 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
                    <img
                      src={item.sprites.other.dream_world.front_default}
                      alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                      className="bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto my-auto p-6"
                    />
                    <img
                      src={item.sprites.other.home.front_shiny}
                      alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                      className="bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto my-auto p-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pokemon