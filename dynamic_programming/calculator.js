// Get input from the stream
let chunks = [];
process.stdin.on("readable", function () {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    chunks.push(chunk);
  }
});
process.stdin.on("end", function () {
  function calculate(data) {
    // parse input
    let number = parseInt(data);
    let result = new Array(number).fill(Infinity);
    let prev = new Array(number);
    result[0] = 0;
    let finalArr = [number];

    for (let i = 1; i <= number; i++) {
      [i * 2, i * 3, i + 1].forEach((k) => {
        if (k - 1 < number && result[i - 1] + 1 < result[k - 1]) {
          result[k - 1] = result[i - 1] + 1;
          prev[k - 1] = i;
        }
      });
    }
    while (number > 1) {
      finalArr.push(prev[number - 1]);
      number = prev[number - 1];
    }

    console.log(result[result.length - 1]);
    console.log(finalArr.reverse().join(" "));
  }
  calculate(chunks.join(" "));
});

// Sample Input 1:
// 1
// Sample Output 1:
// 0
// 1
// Sample Input 2:
// 5
// Sample Output 2:
// 3
// 1 2 4 5
// Sample Input 3:
// 96234
// Sample Output 3:
// 14
// 1 3 9 10 11 22 66 198 594 1782 5346 16038 16039 32078 96234
