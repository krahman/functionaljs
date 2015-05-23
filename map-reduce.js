module.exports = function countWords(inputWords) {
	return inputWords
	.reduce(function(prev, current) {
		prev[current] ? prev[current] += 1 : prev[current] = 1;
		return prev;
	}, {});
};

// official answer
// module.exports = function countWords(inputWords) {
// 	return inputWords
// 	.reduce(function(prev, current) {
// 		prev[current] = ++prev[current] || 1;
// 		return prev;
// 	}, {});
// }