import React from "react";
import useData from "../src/useData";
import useStore from "../src/useStore";

const Card = ({ character }) => {
	// const { data } = useData("https://https://rickandmortyapi.com/api/character");
	const characters = useStore(state => state.characters);
	return (
		<div key={character.id}>
			{/* Grid Wrapper*/}
			{/*{console.log(character.name)}*/}
			<div key={character.id}>
				{/* Card Wrapper*/}
				{/* Card Image*/}
				<img src={character.image} alt="Picture of {character.name}" />
				<div>
					{/* Card Title*/}
					{character.name}
				</div>
				{/* Card Button*/}
				<button>add to favourites</button>
			</div>
		</div>
	);
};

export default Card;
