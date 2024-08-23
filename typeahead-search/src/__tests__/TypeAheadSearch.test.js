import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TypeAheadSearch from "../components/TypeAheadSearch";
import { fetchFruits } from "../utils/services";

// Mocking the fetchFruits function
jest.mock("../utils/services", () => ({
	fetchFruits: jest.fn(),
}));

describe("TypeAheadSearch Component", () => {
	beforeEach(() => {
		jest.clearAllMocks(); // Clear any previous mocks
	});

	test("renders input field", () => {
		render(<TypeAheadSearch />);
		const input = screen.getByPlaceholderText(/search fruits.../i);
		expect(input).toBeInTheDocument();
	});
});
