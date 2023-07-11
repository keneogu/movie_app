import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { apiKey } from "../Api/apiKey";
import { reducer } from "../reducer/Reducer";

export const useFetchMovie = () => {
	const [{ data, isLoading, error }, dispatch] = useReducer(reducer, {
		isLoading: false
	});

	const [term, setTerm] = useState<string>("superman")
	const [type, setType] = useState<string>("movie")

	useEffect(() => {
		let ignore = false;
		dispatch({ type: 'request' })
		axios(`http://www.omdbapi.com/?apikey=${apiKey}&s=${term}&type=${type}`)
		.then(results => { if (!ignore) dispatch({ type: 'success', results: results?.data }); },
		 (error) => dispatch({ type: 'failure', error }))
		return () => { ignore = true }
	}, [term, type])

	return { data, isLoading, error, term, type, setTerm, setType }
}
