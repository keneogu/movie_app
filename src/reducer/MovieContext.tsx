import React, { useContext, createContext } from 'react';
import { useFetchMovie } from '../customHook/useFetchData';

type MovieContext = {
	children: React.ReactNode
}
const Movies = createContext<any>(null);

export const MoviesContext = ({children}: MovieContext) => {
	const {data, isLoading, error } = useFetchMovie();

	return (
		<Movies.Provider value={{ data, isLoading, error}}>{children}</Movies.Provider>
	) 
	
}

export const MovieState = () => {
	return useContext(Movies)
}
