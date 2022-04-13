import ProgressBar from "react-customizable-progressbar";

const Profile = ({ openTab, item, theme }) => {
  return (
    <div className={openTab === 1 ? "block" : "hidden"} id="profile">
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
  );
};

export default Profile;
