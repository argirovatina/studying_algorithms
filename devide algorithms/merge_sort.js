// Get input from the stream
let chunks = [];
process.stdin.on("readable", function () {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    chunks.push(chunk);
  }
});
process.stdin.on("end", function () {
  let counter = 0;

  function inversionsCount(data) {
    // parse input
    let input = data.toString().split("\n");
    parseInt(input.shift());
    let resultArr = [];
    let unsortedArr = input[0].split(" ").map((i) => parseInt(i));
    mergeSort(unsortedArr);
    console.log(counter);
  }

  function mergeSort(array) {
    if (array.length < 2) {
      return array;
    }
    let divideIndex = array.length / 2;
    let left = array.splice(0, divideIndex);
    return merge(mergeSort(left), mergeSort(array));
  }

  function merge(arr1, arr2) {
    let resultArr = [];
    while (arr1.length && arr2.length) {
      if (arr1[0] > arr2[0]) {
        counter += arr1.length;
        resultArr.push(arr2.shift());
      } else {
        resultArr.push(arr1.shift());
      }
    }
    return [...resultArr, ...arr1, ...arr2];
  }
  inversionsCount(chunks.join(""));
});
// parse input

// Sample Input:
// 5
// 2 3 9 2 9
// Sample Output:
// 2
