module.exports = function reduce(arr, fn, initial) {
	return (function reduceCounter(counter, value) {
		if (counter > arr.length - 1) return value;
		return reduceCounter(counter + 1, fn(value, arr[counter], counter, arr));
	})(0, initial);
};