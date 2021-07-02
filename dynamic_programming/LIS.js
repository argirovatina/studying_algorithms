// Get input from the stream
let chunks = [];
process.stdin.on("readable", function () {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    chunks.push(chunk);
  }
});
process.stdin.on("end", function () {
  function findLIS(data) {
    //parse input
    let input = data.toString().split("\n");
    let len = parseInt(input[0]);
    let array = input[1].split(" ").map((e) => parseInt(e));
    let lengthsArr = new Array(len);
    let prev = new Array(len);

    for (let i = 0; i < len; i++) {
      lengthsArr[i] = 1;
      prev[i] = -1;
      for (let j = 0; j <= i - 1; j++) {
        if (array[i] % array[j] == 0 && lengthsArr[j] + 1 > lengthsArr[i]) {
          lengthsArr[i] = lengthsArr[j] + 1;
          prev[i] = j;
        }
      }
    }

    let ans = lengthsArr[0];
    for (let i = 0; i < len; i++) {
      ans = Math.max(ans, lengthsArr[i]);
    }
    console.log(ans);
  }
  findLIS(chunks.join(""));
});

// Sample Input:
// 4
// 3 6 7 12
// Sample Output:
// 3
