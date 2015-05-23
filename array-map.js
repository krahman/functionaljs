function doubleAll(numbers) {
	return numbers.map(function(number) {
		return number * 2;
	});
}

module.exports = doubleAll;

// Official solution

// module.exports = function(numbers) {
// 	return numbers.map(function(num) {
// 		return num * 2;
// 	});
// };