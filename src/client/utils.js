export const round = (value, decimals = 0) => {
	const factor = 10 ** decimals;

	return Math.round(value * factor) / factor;
};

export const isBrowser = () => {
	return typeof window !== 'undefined';
};
