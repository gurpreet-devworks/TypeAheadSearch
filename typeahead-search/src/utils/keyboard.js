export const handleKeyDown = (
	e,
	suggestions,
	activeIndex,
	setActiveIndex,
	setQuery,
	setShowSuggestions
) => {
	if (e.key === "ArrowDown") {
		setActiveIndex((prevIndex) =>
			prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
		);
	} else if (e.key === "ArrowUp") {
		setActiveIndex((prevIndex) =>
			prevIndex > 0 ? prevIndex - 1 : prevIndex
		);
	} else if (e.key === "Enter") {
		if (activeIndex >= 0) {
			setQuery(suggestions[activeIndex]);
			setShowSuggestions(false);
		}
	}
};
