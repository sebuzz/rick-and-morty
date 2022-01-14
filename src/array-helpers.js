/**
 *
 * @param array
 * @param item
 * @param prepend
 * @return {*[]}
 */
export const add = (array, item, { prepend } = {}) => {
	return prepend ? [item, ...array] : [...array, item];
};

/**
 *
 * @param array
 * @param index
 * @return {*[]}
 */
export const remove = (array, index) => {
	const clone = [...array];
	clone.splice(index, 1);
	return clone;
};

export const update = (array, index, props) => {
	const clone = [...array];
	clone[index] = { ...clone[index], ...props, id: clone[index].id };
	console.log(`Hier: `, clone);
	return clone;
};

/**
 *
 * @param array
 * @param previousIndex
 * @param nextIndex
 * @return {*[]}
 */
export const move = (array, previousIndex, nextIndex) => {
	const clone = [...array];
	clone.splice(nextIndex, 0, ...clone.splice(previousIndex, 1));
	return clone;
};
