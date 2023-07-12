type dataState = {
	data?:HNResponse;
	isLoading: boolean;
	error?: string
}

type HNResponse = {
		Title: string;
		Plot?: string;
		Year?: string;
		Runtime?: string;
		Genre?: string;
		Director?: string;
		Poster?: string;
		imdbRating?: string;
		Type?: string;
}

type Actions = 
	| { type: "request" }
	| { type: "success", results: HNResponse }
	| { type: "failure", error: string };

export const movieIdReducer = (state: dataState, action: Actions) => {
	switch(action.type){
		case "request":
			return { isLoading: true }
		case "success":
			return { isLoading: false, data: action.results }
		case "failure":
			return { isLoading: false, error: action.error }
		default:
			return state
	}
}
