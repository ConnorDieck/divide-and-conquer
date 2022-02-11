function countZeroes(arr) {
	let left = 0;
	let right = arr.length - 1;
	let mid = Math.floor((right + left) / 2);
	let numZeroes = 0;

	while (left <= right) {
		mid = Math.floor((right + left) / 2);

		if (arr[mid] === 0) {
			numZeroes += right - (mid - 1);
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return numZeroes;
}

module.exports = countZeroes;

// [1, 1, 1, 0, 0]
// right = 4
// left = 3
// mid = 2

// [1, 0, 0, 0]

// [1, 1, 1, 1, 1, 0]
