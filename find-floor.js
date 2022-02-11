function findFloor(arr, num, left = 0, right = arr.length - 1) {
	let mid = Math.floor((right + left) / 2);
	let res = -1;

	if (arr[left] > num) {
		return res;
	}
	if (arr[right] < num) {
		return arr[right];
	}

	while (left <= right) {
		mid = Math.floor((right + left) / 2);

		if (arr[mid] === num) {
			return arr[mid];
		} else if (arr[mid] > num) {
			right = mid - 1;
		} else {
			res = arr[mid];
			left = mid + 1;
		}
	}

	return res;
}

module.exports = findFloor;
