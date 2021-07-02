// Get input from the stream
let chunks = [];
process.stdin.on("readable", function () {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    chunks.push(chunk);
  }
});
process.stdin.on("end", function () {
  function pointLine(data) {
    // parse input
    let input = data.toString().split("\n");
    let points = input
      .pop()
      .split(" ")
      .map((p) => parseInt(p));
    let leftPoints = [];
    let rightPoints = [];
    let resultArr = [];
    for (let i = 1; i < input.length; i++) {
      let line = input[i].split(" ");
      leftPoints.push(parseInt(line[0]));
      rightPoints.push(parseInt(line[1]));
    }
    quickSort(leftPoints, 0, leftPoints.length - 1);
    quickSort(rightPoints, 0, rightPoints.length - 1);
    points.forEach((point) => {
      let leftArray = searchLimit(leftPoints, point, 0, leftPoints.length - 1);
      let rightArray = searchLimit(
        rightPoints,
        point,
        0,
        rightPoints.length - 1
      );
      let equalPoints = searchLimitEqual(rightArray, point);
      resultArr.push(
        leftArray.length - (rightArray.length - equalPoints.length)
      );
    });
    console.log(resultArr.join(" "));
  }

  function partition(array, start, end) {
    let mid = start;
    let pivot = array[end];

    while (mid <= end) {
      if (array[mid] < pivot) {
        swap(array, start, mid);
        start++;
        mid++;
      } else if (array[mid] > pivot) {
        swap(array, mid, end);
        end--;
      } else {
        mid++;
      }
    }
    return [start - 1, mid];
  }

  function quickSort(array, start, end) {
    if (start >= end) {
      return;
    }
    if (start - end == 1) {
      if (array[start] < array[end]) {
        swap(array, start, end);
      }
      return;
    }
    let [x, y] = partition(array, start, end);
    quickSort(array, start, x);
    return (start = y), (x = end);
  }

  function searchLimit(array, limit, s, e) {
    if (array[array.length - 1] <= limit) {
      return array;
    } else if (array[0] > limit) {
      return [];
    }
    let divideIndex;
    while (s <= e) {
      divideIndex = Math.floor((s + e) / 2);
      if (array[divideIndex] <= limit) {
        s = divideIndex + 1;
      } else if (array[divideIndex] > limit) {
        e = divideIndex - 1;
      }
    }
    if (array[s] > limit) {
      return array.slice(0, s);
    } else if (array[s] < limit) {
      return array.slice(s);
    }
  }
  function searchLimitEqual(array, limit) {
    let l = 0;
    let r = array.length - 1;
    let resultArr = [];
    while (l <= r) {
      let divideIndex = Math.floor((l + r) / 2);
      if (limit == array[divideIndex]) {
        resultArr.push(divideIndex);
        l = 0;
        r -= 1;
      } else if (limit < array[divideIndex]) {
        r = divideIndex - 1;
      } else {
        l = divideIndex + 1;
      }
    }
    return resultArr;
  }

  function swap(array, index1, index2) {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  }
  pointLine(chunks.join(""));
});

// Sample Input:
// 2 3
// 0 5
// 7 10
// 1 6 11
// Sample Output:
// 1 0 0
