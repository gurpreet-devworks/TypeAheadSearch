import React, { useState, useEffect, useRef } from "react";
import { fetchFruits } from "../utils/services";
import {
	getComboboxProps,
	getListboxProps,
	getOptionProps,
} from "../utils/accessibility";
import { highlightText } from "../utils/highlight";
import { handleKeyDown } from "../utils/keyboard";

const TypeAheadSearch = () => {
	const [query, setQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [activeIndex, setActiveIndex] = useState(-1);
	const suggestionsRef = useRef(null);
	const [error, setError] = useState(""); // Error state

	useEffect(() => {
		const getSuggestions = async () => {
			setError(""); // Clear previous errors
			if (query.length > 0) {
				try {
					const results = await fetchFruits(query);
					setSuggestions(results);
					setShowSuggestions(true);
				} catch (err) {
					// Handle API error
					setError("Failed to fetch suggestions. Please try again.");
					console.error(err); // Log the error for debugging
				}
			} else {
				setSuggestions([]);
				setShowSuggestions(false);
			}
		};

		getSuggestions();
	}, [query]);

	const handleBlur = () => {
		setTimeout(() => setShowSuggestions(false), 100);
	};

	return (
		<div className='container mt-4'>
			<div className='position-relative'>
				<input
					type='text'
					className='form-control shadow-sm'
					placeholder='Search fruits...'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onBlur={handleBlur}
					onFocus={() => query.length > 0 && setShowSuggestions(true)}
					onKeyDown={(e) =>
						handleKeyDown(
							e,
							suggestions,
							activeIndex,
							setActiveIndex,
							setQuery,
							setShowSuggestions
						)
					}
					{...getComboboxProps(query, activeIndex, showSuggestions)}
				/>
				{error && <div className='text-danger mt-2'>{error}</div>}{" "}
				{/* Display error message */}
				{showSuggestions && suggestions.length > 0 && (
					<ul
						className='list-group position-absolute w-100 shadow-sm mt-1'
						ref={suggestionsRef}
						{...getListboxProps()}>
						{suggestions.map((suggestion, index) => (
							<li
								key={index}
								className={`list-group-item list-group-item-action ${
									index === activeIndex ? "active" : ""
								}`}
								{...getOptionProps(index, activeIndex)}>
								{highlightText(suggestion, query)}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default TypeAheadSearch;
