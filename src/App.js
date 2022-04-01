import { Routes, Route } from "react-router-dom";
import Pokemon from "./views/Pokemon";
import Pokemons from "./views/Pokemons";
import WhatPokemonAmI from "./views/WhatPokemonAmI";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Pokemons />} />
      <Route path="/pokemon/:name" element={<Pokemon />} />
      <Route path="/wath-pokemon-am-i" element={<WhatPokemonAmI />} />
    </Routes>
  );
}

export default App;