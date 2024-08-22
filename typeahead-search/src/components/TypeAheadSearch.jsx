import React, { useState, useEffect, useRef } from "react";
import { fetchFruits } from "../utils/services";
import { getComboboxProps } from "../utils/accessibility";

const TypeAheadSearch = () => {
	const [query, setQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [activeIndex, setActiveIndex] = useState(-1);
	const suggestionsRef = useRef(null);

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
					onBlur={() =>
						setTimeout(() => setShowSuggestions(false), 100)
					}
					onFocus={() => query.length > 0 && setShowSuggestions(true)}
					{...getComboboxProps(query, activeIndex, showSuggestions)}
				/>
				{console.log(showSuggestions)}
				{showSuggestions && suggestions.length > 0 && (
					<ul id='suggestions-list' ref={suggestionsRef}>
						{suggestions.map((suggestion, index) => (
							<li key={index}>{suggestion}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
export default TypeAheadSearch;
