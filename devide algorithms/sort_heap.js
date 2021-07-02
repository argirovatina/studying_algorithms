function siftDown(array, index, len = array.length) {
  let maxIndex = index;
  let left = index * 2 + 1;
  let right = index * 2 + 2;

  if (array[left] > array[maxIndex] && left < len) {
    maxIndex = left;
  }
  if (array[right] > array[maxIndex] && right < len) {
    maxIndex = right;
  }
  if (maxIndex !== index) {
    swap(array, index, maxIndex);
    siftDown(array, maxIndex, len);
  }
  return array;
}

function sortHeap(array) {
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    siftDown(array, i);
  }
  for (let i = array.length - 1; i > 0; i--) {
    swap(array, i, 0);
    siftDown(array, 0, i);
  }
  return array;
}

function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

sortHeap([2, 1, 5, 3, 9, 3, 0]);
