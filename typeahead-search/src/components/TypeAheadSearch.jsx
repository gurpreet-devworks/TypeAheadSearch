import React, { useState, useEffect } from "react";
import { fetchFruits } from "../utils/services";

const TypeAheadSearch = () => {
	const [query, setQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const getSuggestions = async () => {
			if (query.length > 0) {
				const results = await fetchFruits(query);
				setSuggestions(results);
				console.log(results);
			} else {
				setSuggestions([]);
			}
		};
		getSuggestions();
	}, [query]);

	return (
		<div className='container mt-4'>
			<div className='position-relative'>
				<input
					type='text'
					className='form-control shadow-sm'
					placeholder='Search fruits...'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					aria-autocomplete='list'
					role='combobox'
					aria-controls='suggestions-list'
					aria-expanded={true} //need to add suggestion list
				/>
				<ul id='suggestions-list'></ul>
			</div>
		</div>
	);
};
export default TypeAheadSearch;
