const calculateStars = (rating: number) => {
	const filledStars = Math.floor(rating);
	const halfStars = rating - filledStars > 0.49 ? 1 : 0;

	const starArray = Array.from({ length: filledStars }, (_, e) => e + 1);

	return { filledStars, halfStars };
};

export default calculateStars;
