import { SearchCircleIcon, XCircleIcon } from "@heroicons/react/solid";
import styled from "styled-components";

const ClearInput = styled.div`
  position: absolute;
  top: 1rem;
  left: 0.75rem;
  cursor: pointer;
`;

const InputFilterPokemon = ({ filtering, handleChange, clearFilter }) => {
  return (
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
  );
};

export default InputFilterPokemon;
