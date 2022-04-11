import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [openTab, setOpenTab] = useState(1);
  const { name } = useParams();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        setPokemon([res.data]);
      })
  },[name]);

  console.log(pokemon);

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
                Imagenes
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-900 w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={openTab === 1 ? "block" : "hidden"}
                  id="profile"
                >
                  <div>
                    <h2 className="flex text-3xl font-fredoka font-semibold capitalize text-gray-700 dark:text-white sm:text-4xl">
                      {item.name}
                    </h2>
                    <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                      <div className="border-t border-gray-200 pt-4">
                        <dt className="font-fredoka font-medium capitalize text-gray-900">
                          Habilidades
                        </dt>
                        <dd className="mt-2 text-sm font-fredoka capitalize text-gray-500">
                          {item.abilities.map(({ability}) => {
                            return console.log(ability);
                          })}
                        </dd>
                      </div>
                    </dl>
                  </div>
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