const Images = ({ openTab, item }) => {
  return (
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
  );
}

export default Images