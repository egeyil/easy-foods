export const calculateStars = (rating: number) => {
	const filledStars = Math.floor(rating);
	const halfStar = rating - filledStars > 0.49 ? 1 : 0;

	const filledStarArray = Array.from({ length: filledStars }, (_, e) => e + 1);
	const emptyStarArray = Array.from({ length: 5 - filledStars - halfStar }, (_, e) => e + 1);

	return { filledStarArray, emptyStarArray, halfStar };
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
