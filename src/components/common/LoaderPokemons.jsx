const LoaderPokemons = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ].map((i) => (
        <div
          className="bg-white dark:bg-gray-900 rounded-xl p-4 max-w-sm w-full mx-auto overflow-hidden shadow-lg"
          key={i}
        >
          <div className="animate-pulse">
            <div className="mx-auto rounded-lg bg-slate-200 dark:bg-gray-700 h-40 w-40"></div>
            <div className="w-24 h-4 mt-4 mb-2 mx-auto bg-slate-200 dark:bg-gray-700 rounded"></div>
            <div className="w-28 sm:w-28 md:w-40 lg-48 h-6 mx-auto bg-slate-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LoaderPokemons