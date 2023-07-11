import { useState, FC } from 'react';
import { MovieState } from "../reducer/MovieContext";

export const Search: FC = () => {

	const { term, setTerm, setType } = MovieState();

	const [searchTerm, setSearchTerm] = useState(term);

	console.log(term)
	return (
		<div className='flex justify-center items-center'>
			<div className='mx-3 border-2 rounded-md'>
				<input type="text" onChange={(e) => setSearchTerm(e.target.value)} className='outline-0 px-1'/>
				<button onClick={() => setTerm(searchTerm)} className='bg-slate-500 text-white px-2 rounded-l-md'>search</button>
			</div>
			
			<div>
				<select name="type" id="type" onChange={(e) => setType(e.target.value)} className='outline-slate-500'>
				<option value="">Select type</option>
				<option value="movie">movie</option>
				<option value="series">series</option>
			</select>
			</div>
		</div>
	);
}
