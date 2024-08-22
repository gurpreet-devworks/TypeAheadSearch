import React, { useState } from "react";

const TypeAheadSearch = () => {
	const [query, setQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);

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
