// function repeat(operation, num) {
// 	for(var i = 0; num < i; i++) {
// 		operation();
// 	}
// }

// OR

function repeat(operation, num) {
	if (num <= 0) return;
	operation();
	return repeat(operation, --num);
}

module.exports = repeat;