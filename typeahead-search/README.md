
# TypeAhead Search Component

This project is a React-based type-ahead search component that fetches suggestions from a local JSON file. It highlights the matching part of the suggestions based on user input, using Bootstrap utility classes for styling. The component is fully accessible and includes basic tests.

## Features

- **React and Bootstrap**: Utilizes React for building the component and Bootstrap for styling.
- **Type-Ahead Search**: Provides dynamic suggestions as the user types.
- **Highlighting Matches**: Highlights the part of each suggestion that matches the user's query.
- **Accessibility**: Accessible using keyboard navigation and screen readers.
- **Basic Testing**: Includes basic tests using Jest and React Testing Library.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/gurpreet-devworks/TypeAheadSearch.git
   cd typeahead-search
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Application**

   ```bash
   npm start
   ```

4. **Run the Tests**

   ```bash
   npm test
   ```

## Project Structure

```
.
├── public
│   └── fruits.json
├── src
│   ├── __tests__
│   │   └── TypeAheadSearch.test.js
│   ├── components
|   |   └──TypeAheadSearch.jsx
|   |── utils
|   |   ├──accessibility.js
|   |   ├──highlight.js
|   |   ├──keyboard.js
|   |   └──services.js
│   ├── App.js
│   └── index.js
├── LICENCE
├── package.json
└── README.md
```

### Files

- **`public/fruits.json`**: Contains the mock data used for the type-ahead search.
- **`src/components/TypeAheadSearch.js`**: The main React component for the type-ahead search.
- **`src/utils/accessibility.js`**: The accessibility attributes for dropdown and ul
- **`src/utils/highlight.js`**: The hightlight style for typed letters
- **`src/utils/keyboard.js`**: added keyboard support for up and down arrow
- **`src/utils/services.js`**: The hook to pull data from Fake API.
- **`src/__tests__/TypeAheadSearch.test.js`**: Contains basic tests for the `TypeAheadSearch` component.
- **`src/App.js`**: The entry point for the React application.

## JSON Data

The `fruits.json` file in the `public` directory contains a list of fruit names used for search suggestions:

```json
[
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Strawberry",
  "Grapes",
  "Blueberry",
  "Watermelon",
  "Peach",
  "Kiwi",
  "Pear",
  "Cherry",
  "Plum",
  "Apricot"
]
```

## Component Usage

Here’s a summary of how the `TypeAheadSearch` component works:

- **State Management**: 
  - `query`: Stores the user's input.
  - `suggestions`: Stores the list of suggestions filtered based on the query.
  - `showSuggestions`: Controls the visibility of the suggestion list.
  - `activeIndex`: Tracks the currently highlighted suggestion for keyboard navigation.
  
- **Fetching Data**: The component fetches data from the `fruits.json` file whenever the user types in the input field.
  
- **Highlighting**: The `highlightText` function is used to highlight the part of each suggestion that matches the user's query.

- **Accessibility**: The component supports keyboard navigation (Arrow keys and Enter) and uses ARIA attributes to enhance accessibility.

## Customization

### Styling

The component uses Bootstrap utility classes for styling. You can customize the appearance by modifying the Bootstrap classes used in the component.

### Highlighting

The `highlightText` function in `TypeAheadSearch.js` controls how the matching text is highlighted. You can change the styling by adjusting the classes used in this function.

## Testing

Tests are written using Jest and React Testing Library. These tests cover basic functionality, including rendering, interaction, and keyboard navigation.

To run the tests:

```bash
npm test
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributions

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

---
