module.exports = function getZerosCount(number) {
  // your implementation
  let zeroCount = 0;
	while (number >= 5){
		number = Math.floor(number / 5);
		zeroCount = zeroCount + number;
	}
	return zeroCount;
}
