import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { apiKey } from "../Api/apiKey";
import { movieIdReducer } from '../reducer/MovieIDReducer';

const useFetchDataID = () => {
	const [{ data, isLoading, error }, dispatch] = useReducer(movieIdReducer, {
		isLoading: false
	});
	const [id, setID] = useState<string>("")

	console.log(data);


	useEffect(() => {
		let ignore = false;
		dispatch({ type: 'request' })
		axios(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}&Plot=full`)
			.then(results => { if (!ignore) dispatch({ type: 'success', results: results?.data }); },
				(error) => dispatch({ type: 'failure', error }))
		return () => { ignore = true }
	}, [id])


	return { data, isLoading, error, setID }
}

export default useFetchDataID