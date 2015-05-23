function getShortMessages(messages) {
	return messages
		.filter(function(data) {
			return data.message.length < 50;
		})
		.map(function(data) {
			return data.message;
		});

}
module.exports = getShortMessages;

// official result

// module.exports = function(messages) {
// 	return messages
// 		.filter(function(item) {
// 			return item.message.length < 50;
// 		})
// 		.map(function(item) {
// 			return item.message;
// 		});
// };