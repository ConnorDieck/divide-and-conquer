function sortedFrequency(arr, num) {
	let first = findFirst(arr, num);
	let last = findLast(arr, num);

	if (first === -1) {
		return -1;
	}

	return last - first + 1;
}

function findFirst(arr, num, left = 0, right = arr.length - 1) {
	// returns first index of num

	let mid = Math.floor((right + left) / 2);

	if (num > arr[right] || num < arr[left]) {
		return -1;
	}

	if ((arr.length === 0 || arr[mid - 1] !== num) && arr[mid] === num) {
		return mid;
	} else if (arr[mid] > num || arr[mid - 1] === num) {
		return findFirst(arr, num, left, mid - 1);
	} else if (arr[mid] < num) {
		return findFirst(arr, num, mid + 1, right);
	}
}

function findLast(arr, num, left = 0, right = arr.length - 1) {
	// returns last index of num

	let mid = Math.floor((right + left) / 2);

	if (num > arr[right] || num < arr[left]) {
		return -1;
	}

	if ((arr.length === 0 || arr[mid + 1] !== num) && arr[mid] === num) {
		return mid;
	} else if (arr[mid] < num || arr[mid + 1] === num) {
		return findLast(arr, num, mid + 1, right);
	} else if (arr[mid] > num) {
		return findLast(arr, num, left, mid - 1);
	}
}

module.exports = sortedFrequency;

// // sortedFrequency([1,1,2,2,2,2,3],2) // 4
// left = 4;
// right = 7;
// mid = 5;

// // sortedFrequency([1,1,2,2,2,2,3],3) // 1
// left = 6;
// right = 6;
// mid = 6;

// // sortedFrequency([1,1,2,2,2,2,3],1) // 2
// left = 0;
// right = 6;
// mid = 3;
// // sortedFrequency([1,1,2,2,2,2,3],4) // -1
