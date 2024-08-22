import React, { useState, useEffect, useRef } from "react";
import { fetchFruits } from "../utils/services";
import {
	getComboboxProps,
	getListboxProps,
	getOptionProps,
} from "../utils/accessibility";

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
					<ul
						id='suggestions-list'
						className='list-group position-absolute w-100 shadow-sm mt-1'
						ref={suggestionsRef}
						{...getListboxProps()}>
						{suggestions.map((suggestion, index) => (
							<li
								key={index}
								className={`list-group-item list-group-item-action ${
									index === activeIndex ? "active" : ""
								}`}
								{...getOptionProps}>
								{suggestion}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
export default TypeAheadSearch;
