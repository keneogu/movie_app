import React, {FC, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { MovieDetailState } from '../reducer/MovieIDContext';

export const MovieDetails: FC = () => {
	const { data, isLoading, error, setID } = MovieDetailState()

	const {imdbID} = useParams();

	useEffect(() => {
		setID(imdbID)
	}, [setID, imdbID])

	console.log(data);
	console.log(imdbID);

	return (
		<div className='container mx-auto'>
			{isLoading && <span>Loading...</span>}
			{error  && <span>Error: {error}</span>}
			<div className='mx-5'>
				{data && data.Title &&
					<div className='flex flex-col md:flex-row my-5 justify-start text-start'>
						<div className='w-full md:w-2/6'>
							<img src={data.Poster} alt="" style={{ height: '400px'}} className='h-full w-full lg:h-[500px] '/>
						</div>
						<div className='mt-5 md:ml-12 md:w-4/6'>
							<h3 className='font-bold text-3xl mb-3'>{data.Title}</h3>
							<p className='text-lg leading-tight py-2 md:text-base'>{data.Plot}</p>
							<h5 className='text-lg py-1'>Directed by: {data.Director}</h5>

							<ul className='block md:flex'>
								<li className='pr-3'><span className='text-green-500'>Year:</span> {data.Year}</li>
								<li className='pr-3'><span className='text-green-500'>Genre:</span> {data.Genre}</li>
								<li className='pr-3'><span className={data.Type === 'movie' ? 'text-red-500' : 'text-green-500'}>Type:</span> {data.Type}</li>
								<li className='pr-3'><span className='text-green-500'>Rating:</span> {data.imdbRating}</li>
								<li className='pr-3'><span className='text-green-500'>Runtime:</span> {data.Runtime}</li>
							</ul>
						</div>
					</div>
				}
			</div>
		</div>
	)
}