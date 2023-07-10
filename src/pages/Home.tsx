import { MovieState } from "../reducer/MovieContext";

export function Home () {

	const { data, isLoading, error } = MovieState();

	return (
		<div>
			{isLoading && <span>Loading...</span>}
			{error  && <span>Error: {error}</span>}

			<ul>
				{data && data.Search && data.Search.map((item: any) => (
					<div key={item.imdbID}>
						<img src={item.Poster} alt="item_image"/>
						<li>{item.Title}</li>
						<li>{item.Year}</li>
						<li>{item.Type}</li>
					</div>
					))}
			</ul>
		</div>
	);
}
