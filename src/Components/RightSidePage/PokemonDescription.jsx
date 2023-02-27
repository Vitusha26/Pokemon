import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PokemonDescription.scss';

export default function PokemonDescription({ clickedPokemon }) {
	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		getPokemonDescription();
	}, [clickedPokemon?.name]);

	const getPokemonDescription = async () => {
		try {
			const response = await axios.get(clickedPokemon?.url);
			setPokemon(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="rightSidePage">
			<div className="data">
				{pokemon && (
					<div className="information">
						<img
							alt="pokemon"
							src={pokemon?.sprites.back_default}
							className="pokemonImg"
						/>
						<h2>{pokemon?.name}</h2>
						<div className="abilities">
							{pokemon?.abilities?.map((abilityItem) => (
								<p key={abilityItem.ability.name}>{abilityItem.ability.name}</p>
							))}
						</div>
						<div className="type">
							{pokemon?.types?.map((typeItem) => (
								<p key={typeItem.type.name}>{typeItem.type.name}</p>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
