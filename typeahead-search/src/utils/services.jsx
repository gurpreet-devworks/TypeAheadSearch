import axios from "axios";

export const fetchFruits = async (query) => {
	try {
		const response = await axios.get("/fruits.json");
		return response.data.filter((fruit) =>
			fruit.toLowerCase().includes(query.toLowerCase())
		);
	} catch (error) {
		console.error("Error fetching fruits:", error);
		return [];
	}
};
