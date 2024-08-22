export const getComboboxProps = (query, activeIndex, showSuggestions) => ({
	"aria-autocomplete": "list",
	"aria-controls": "suggestions-list",
	"aria-activedescendant":
		activeIndex >= 0 ? `suggestion-${activeIndex}` : undefined,
	role: "combobox",
	"aria-expanded": showSuggestions,
	"aria-haspopup": "listbox",
});
