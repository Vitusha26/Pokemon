import './PokemonList.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Limit = 12;
export default function PokemonList({ setClickedPokemon }) {
	const [pokemons, setPokemon] = useState([]);
	const [page, setPage] = useState(0);

	useEffect(() => {
		getPokemons();
	}, [page]);

	const getPokemons = async () => {
		try {
			const response = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/?limit=${Limit}&offset=${page}`
			);
			setPokemon(response.data.results);
		} catch (err) {
			console.log(err);
		}
	};

	const nextPage = () => {
		setPage((prevPage) => prevPage + Limit);
	};

	function prevPage() {
		if (page === 0) {
			return;
		} else {
			setPage(page - Limit);
		}
	}
	return (
		<div className="leftSidePage">
			<div className="pokemonNames">
				{pokemons?.map((pokemon) => (
					<Button
						variant="contained"
						key={pokemon.name}
						sx={{
							width: '25%',
							height: '50px',
							margin: '15px',
							border: '0',
							borderRadius: '2em',
							fontWeight: '600',
							backgroundColor: '#FF1493',
							color: '#FFFAF0',
							'&:hover': {
								backgroundColor: '#FF1493',
							},
						}}
						onClick={() => setClickedPokemon(pokemon)}
					>
						{pokemon.name}
					</Button>
				))}
			</div>
			<div className="nextOrBefore">
				<Button
					variant="contained"
					startIcon={<ChevronLeftIcon />}
					onClick={prevPage}
					sx={{
						border: '0',
						borderRadius: '2em',
						backgroundColor: '#000000',
						color: '#FFFAF0',
						'&:hover': {
							backgroundColor: '#000000',
						},
					}}
				>
					Prev
				</Button>
				<Button
					variant="contained"
					endIcon={<NavigateNextIcon />}
					onClick={nextPage}
					sx={{
						border: '0',
						borderRadius: '2em',
						backgroundColor: '#000000',
						color: '#FFFAF0',
						'&:hover': {
							backgroundColor: '#000000',
						},
					}}
				>
					Next
				</Button>
			</div>
		</div>
	);
}
