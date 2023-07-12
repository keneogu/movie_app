import { MovieState } from "../reducer/MovieContext";
import { Search } from "../components/Search";
import { Link } from "react-router-dom";

export function Home () {
	const { data, isLoading, error } = MovieState();

	return (
		<div className="container sm:mx-auto my-10">
			{isLoading && <span>Loading...</span>}
			{error  && <span>Error: {error}</span>}
			<div>
				<Search />
				<div className='w-full flex my-10'>
					<ul className='list-none flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-8'>
				{data && data.Search && data.Search.map((item: any) => (
					<div key={item.imdbID} className='block relative my-8 md:my-2 bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden'>
						<Link to={`/movie/${item.imdbID}`}>
							<div className='w-full'>
								<img src={item.Poster} alt="item_image" className="inset-0 h-full w-full object-contain p-2"/>
							</div>
							<div className='pt-2 text-center'>
								<li>{item.Title}</li>
								<li>{item.Year}</li>
								<li className="absolute right-0 top-8 bg-white font-semibold px-4 py-1">{item.Type}</li>
							</div>
						</Link>
					</div>
					))}
			</ul>
				</div>
			</div>
		</div>
	);
}
