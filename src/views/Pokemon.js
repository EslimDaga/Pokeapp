import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
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
        <div
          key={item.id}
          className="max-w-2xl mx-auto py-4 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2"
        >
          <div>
            <h2 className="flex text-3xl font-fredoka font-semibold capitalize text-gray-900 dark:text-white sm:text-4xl">
              {item.name}
            </h2>
            <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={item.sprites.other.dream_world.front_default}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto my-auto p-6"
            />
            <img
              src={item.sprites.other.home.front_shiny}
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto my-auto p-6"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pokemon