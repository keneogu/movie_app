import React, { useContext, createContext } from 'react';
import useFetchDataID from '../customHook/useFetchDataID';

type MovieContextID = {
	children: React.ReactNode
}

const MovieDetail = createContext<any>(null);

export const MoviesContextID = ({children}: MovieContextID) => {
	const {data, isLoading, error, setID } = useFetchDataID();

	return (
		<MovieDetail.Provider value={{ data, isLoading, error, setID}}>{children}</MovieDetail.Provider>
	) 
	
}

export const MovieDetailState = () => {
	return useContext(MovieDetail)
}
