export const stripHTMLTags = (html: string) => {
	return html.replace(/<[^>]+>/g, '');
};
export const findURLs = (text: string) => {
	const urlRegex = /(https?:\/\/[^\s]+)/g;
	const urls = text.match(urlRegex);
	const newText = text.replace(urlRegex, '');
	return {
		urls: urls || [],
		text: newText,
	};
};
type Code = '&#8217;';
export const decodeHTMLEntities = (text: string) => {
	const entities = {
		'&#8217;': "'", // Apóstrofe
		// Agrega más entidades y sus correspondientes caracteres aquí si es necesario
	};

	// Utiliza una expresión regular para buscar todas las entidades en el texto y reemplazarlas
	return text.replace(/&#(\d+);|&(amp|lt|gt|quot);/g, (match, dec, entity) => {
		if (dec) {
			return String.fromCharCode(dec);
		} else {
			const ent = entity as Code;
			return entities[ent] || match;
		}
	});
};
export type REF = React.MutableRefObject<HTMLDivElement | null>;
export type REFNUMBER = React.MutableRefObject<number>;
export const handleMoveCarruzel = (refAllImages: REF, refContainer: REF) => {
	if (refAllImages.current && refContainer.current) {
		const slider = refAllImages.current?.offsetWidth;
		const container = refContainer.current?.offsetWidth;
		const distance = slider - container;
		const result = slider / container - 1;
		const countSlide = Math.ceil(result);
		const countTranslate = distance / countSlide;
		return { countSlide, countTranslate };
	}
	// Scamos la cantidad de veces que se tiene que mover maximo dependiendo el contenedor y lo que se debe mover en cada una
	return { countSlide: 0, countTranslate: 0 };
};
export type Direction = 'next' | 'prev';
export const handlePageChange = (
	direction: Direction,
	refAllImages: REF,
	refContainer: REF,
	countRef: REFNUMBER,
	translateRef: REFNUMBER,
) => {
	const { countSlide, countTranslate } = handleMoveCarruzel(
		refAllImages,
		refContainer,
	);
	if (refAllImages.current) {
		if (direction === 'next' && countSlide > countRef.current) {
			countRef.current = countRef.current + 1;
			translateRef.current = translateRef.current + countTranslate;
		}
		if (direction === 'prev' && countRef.current > 0) {
			countRef.current = countRef.current - 1;
			translateRef.current = translateRef.current - countTranslate;
		}
		refAllImages.current.style.transform = `translateX(-${translateRef.current}px)`;
	}
};
