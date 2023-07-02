type dataState = {
	data?:HNResponse;
	isLoading: boolean;
	error?: string
}

type HNResponse = {
	Search: {
		Title: string;
		Year?: string;
		imdbID?: string;
		Type?: string;
		Poster?: string;
	}[]
}

type Actions = 
	| { type: "request" }
	| { type: "success", results: HNResponse }
	| { type: "failure", error: string };

export const reducer = (state: dataState, action: Actions) => {
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
