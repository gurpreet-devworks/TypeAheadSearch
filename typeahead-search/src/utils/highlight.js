// highlight.js

import React from "react";

export const highlightText = (text, highlight) => {
	const parts = text.split(new RegExp(`(${highlight})`, "gi"));
	return (
		<>
			{parts.map((part, index) =>
				part.toLowerCase() === highlight.toLowerCase() ? (
					<span key={index} className='text-warning fw-bold'>
						{part}
					</span>
				) : (
					part
				)
			)}
		</>
	);
};
