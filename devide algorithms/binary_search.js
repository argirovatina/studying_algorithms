// Get input from the stream
let chunks = [];
process.stdin.on("readable", function () {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    chunks.push(chunk);
  }
});

process.stdin.on("end", function () {
  function binarySearch(data) {
    // parse input
    let input = data.toString().split("\n");
    let indexArr = input[0].split(" ").map((i) => parseInt(i));
    let numbersArr = input[1].split(" ").map((i) => parseInt(i));
    let resultArr = [];
    let j = 0;
    indexArr.shift();
    numbersArr.shift();
    while (j < numbersArr.length) {
      let l = 0;
      let r = indexArr.length - 1;
      while (l <= r) {
        let divideIndex = Math.floor(l + (r - l) / 2);
        if (numbersArr[j] == indexArr[divideIndex]) {
          resultArr.push(divideIndex + 1);
          l = 0;
          r = indexArr.length - 1;
          j++;
        } else if (numbersArr[j] < indexArr[divideIndex]) {
          r = divideIndex - 1;
        } else {
          l = divideIndex + 1;
        }
      }
      j != numbersArr.length ? resultArr.push(-1) : j;
      j++;
    }
    console.log(resultArr.join(" "));
  }
  binarySearch(chunks.join(""));
});

// Sample Input:
// 5 1 5 8 12 13
// 5 8 1 23 1 11
// Sample Output:
// 3 1 -1 1 -1
