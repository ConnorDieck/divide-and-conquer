function findRotatedIndex(arr, num, left = 0, right = arr.length - 1) {
	let mid = Math.floor((right + left) / 2);

	while (left <= right) {
		mid = Math.floor((right + left) / 2);

		if (arr[mid] === num) {
			return mid;
		} else if (arr[mid] > num && arr[0] <= num) {
			// if num falls between value at middle index and first index, search left half of array
			right = mid - 1;
		} else {
			// otherwise search right half
			left = mid + 1;
		}
	}

	return -1;
}

module.exports = findRotatedIndex;
