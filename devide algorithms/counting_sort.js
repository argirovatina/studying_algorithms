// Get input from the stream
let chunks = [];
process.stdin.on("readable", function () {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    chunks.push(chunk);
  }
});
process.stdin.on("end", function (data) {
  function sortNumbers(data) {
    // parse input
    let input = data.toString().split("\n");
    let number = parseInt(input.shift());
    let maxLen = 11;
    let unsortedArray = input
      .join(" ")
      .split(" ")
      .map((e) => parseInt(e));
    let accArray = new Array(maxLen).fill(0);
    let sortedArr = [];
    for (let j = 0; j < number; j++) {
      accArray[unsortedArray[j]] = accArray[unsortedArray[j]] + 1;
    }
    for (let i = 1; i <= maxLen; i++) {
      accArray[i] = accArray[i] + accArray[i - 1];
    }
    for (let j = 0; j < number; j++) {
      sortedArr[accArray[unsortedArray[j]]] = unsortedArray[j];
      accArray[unsortedArray[j]] = accArray[unsortedArray[j]] - 1;
    }
    console.log(sortedArr.join(" ").trim());
  }
  sortNumbers(chunks.join(""));
});

// Sample Input:
// 5
// 2 3 9 2 9
// Sample Output:
// 2 2 3 9 9
