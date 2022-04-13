import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from "@heroicons/react/solid";

const ButtonPaddingPokemons = ({ filtering, previousPage, nextPage, paging }) => {
  return (
    <div className="flex justify-center pt-4 sm:pt-0 md:pt-0 lg:pt-0">
      {filtering.length <= 0 && (
        <>
          <button
            onClick={() => previousPage(paging.previous)}
            disabled={paging.previous ? false : true}
            className={!paging.previous ? "cursor-not-allowed opacity-50" : ""}
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
  );
};

export default ButtonPaddingPokemons