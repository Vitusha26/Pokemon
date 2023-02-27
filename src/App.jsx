import './App.scss';
import React, { useState } from 'react';

import PokemonList from './Components/LeftSidePage/PokemonList';
import PokemonDescription from './Components/RightSidePage/PokemonDescription';

function App() {
	const [clickedPokemon, setClickedPokemon] = useState(null);

	return (
		<div className="App">
			<PokemonList setClickedPokemon={setClickedPokemon} />
			<PokemonDescription clickedPokemon={clickedPokemon} />
		</div>
	);
}

export default App;
