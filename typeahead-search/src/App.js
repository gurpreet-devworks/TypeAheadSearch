import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TypeAheadSearch from "./components/TypeAheadSearch";

function App() {
	return (
		<div className='App'>
			<h1>Typeahead Search with a fruit list</h1>
			<TypeAheadSearch />
		</div>
	);
}

export default App;
