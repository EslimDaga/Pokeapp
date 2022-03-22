import { Routes, Route } from "react-router-dom";
import Pokemons from "./views/Pokemons";
import WhatPokemonAmI from "./views/WhatPokemonAmI";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Pokemons />} />
      <Route path="/wath-pokemon-am-i" element={<WhatPokemonAmI />} />
    </Routes>
  );
}

export default App;