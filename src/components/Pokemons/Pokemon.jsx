import styled from "styled-components";

const PokemonCard = styled.div`
  cursor: pointer;
`;

const Pokemon = ({ navigate, data }) => {
  return (
    <PokemonCard
      onClick={() => {
        navigate(`/pokemon/${data.name}`);
      }}
      key={data.id}
      className="max-w-sm rounded-xl bg-white dark:bg-gray-900 overflow-hidden shadow-lg transform hover:scale-105"
    >
      <img
        className="w-40 mx-auto mt-4 rounded-lg bg-gray-200 dark:bg-gray-700"
        src={data.sprites.other.home.front_default}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="text-gray-700 dark:text-white capitalize font-fredoka font-semibold text-center mb-2">
          {data.name}
        </div>
        <p className="text-gray-700 dark:text-white font-fredoka font-medium text-center">
          Experiencia : {data.base_experience}
        </p>
      </div>
    </PokemonCard>
  );
};

export default Pokemon;
