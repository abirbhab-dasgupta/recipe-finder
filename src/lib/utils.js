const COLORS = {
	blue: {
		bg: "bg-[#ade8f4]",
		badge: "bg-[#48cae4]",
	},
	pink: {
		bg: "bg-[#fff0f3]",
		badge: "bg-[#fbb1bd]",
	},
	yellow: {
		bg: "bg-[#fff6cc]",
		badge: "bg-[#ffe97f]",
	},
};

export const getRandomColor = () => {
	const colorNames = Object.keys(COLORS); // Get array of the keys (color names)
	const randomIndex = Math.floor(Math.random() * colorNames.length); // Get a random index
	const randomColorName = colorNames[randomIndex]; // Get the color name at the random index
	return COLORS[randomColorName]; // Return the color object corresponding to the random color name
};