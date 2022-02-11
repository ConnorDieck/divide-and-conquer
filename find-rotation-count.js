function findRotationCount(arr, left = 0, right = arr.length - 1) {
	let mid = Math.floor((right + left) / 2);

	// If first value is less than last value or array only contains one value, array has not been rotated
	if (arr[left] < arr[right] || right === 0) {
		return 0;
	}

	while (left <= right) {
		mid = Math.floor((right + left) / 2);

		if (arr[mid] < arr[mid - 1]) {
			// if middle value is greater than previous, return middle index
			return mid;
		} else {
			// otherwise, move left boundary beyond middle (look at right side of array)
			left = mid + 1;
		}
	}

	// To account for the case where the smallest value is at the last index, return right index if no other conditions have been met
	return mid + 1;
}

module.exports = findRotationCount;
