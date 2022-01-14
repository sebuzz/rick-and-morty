import Footer from "../organisms/footer";
import styles from "../styles/Home.module.css";
import image from "next/image";
import React, { useEffect, useState, useMemo } from "react";
import create from "zustand";
import Header from "../organisms/header";
import Main from "../organisms/main";
// import useStore from "../src/useStore";
import useData from "../src/useData";
import Card from "../molecules/card";

import { error } from "next/dist/build/output/log";

// useData Hook

// const useData = url => {
// 	/* State machines*/
// 	const [data, setData] = useState(null);
// 	const [loading, setLoading] = useState(false);
// 	const [error, setError] = useState(null);
//
// 	/* Fetch process*/
// 	useMemo(() => {
// 		fetch(url)
// 			.then(response => response.json())
// 			.then(json => {
// 				console.log(json);
// 				setData(json);
// 			})
// 			.catch(error_ => {
// 				setError(error_);
// 			})
// 			.finally(() => {
// 				setLoading(false);
// 			});
// 	}, [url]);
//
// 	return {
// 		data,
// 		loading,
// 		error,
// 	};
// };
// // /* Zustand*/
// const useStore = create(set => ({
// 	characters: [
// 		{
// 			id: 1,
// 			name: "Rick Sanchez",
// 			image: "#",
// 		}
// 	],
//
// 	addData: (id, name, image) => {
// 		set((state) => ({
// 			characters: [...state.characters, { id, name, image }],
// 		}))
// 	}
// }));

export const useStore = create(set => ({
	characters: [
		{
			id: 0,
			name: "Rick Sanchez jr",
			image: "#",
		},
	],

	setCharacters: characters => {
		console.log("attempting to setCharacters");
		set(state => ({
			characters: [...characters],
		}));
	},
}));

const myURL = "https://rickandmortyapi.com/api/character";

const Home = () => {
	const myCharacters = useStore(state => state.characters);

	console.log("here are myCharacters: ", myCharacters);
	// const characters = data.results;
	// const [characters, setCharacters] = useState([]);
	const characters = useStore(state => state.characters);
	const setCharacters = useStore(state => state.setCharacters);

	/* Fetch process*/
	useEffect(() => {
		fetch(myURL)
			.then(response => response.json())
			.then(json => {
				setCharacters(json.results);
			})
			.catch(error_ => {
				// setError(error_);
			})
			.finally(() => {
				// setLoading(false);
			});
	}, [setCharacters]);
	return (
		<div>
			<title>Rick and Morty App</title>
			<Header />

			<Main />
			<Footer />
		</div>
	);
};

export default Home;
