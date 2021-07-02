// Get input from the stream
let chunks = [];
process.stdin.on("readable", function () {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    chunks.push(chunk);
  }
});
process.stdin.on("end", function () {
  function countStairs(data) {
    // parse input
    let input = data.split("\n");
    let stairs = parseInt(input[0]);
    let stairVal = input[1].split(" ").map((e) => parseInt(e));
    let dp = new Array(stairs);
    if (stairs == 1) {
      return stairVal[0];
    }

    if (stairs == 2) {
      return Math.max(stairVal[1], stairVal[1] + stairVal[0]);
    }

    dp[0] = stairVal[0];
    dp[1] = Math.max(0, dp[0]) + stairVal[1];

    for (let i = 2; i < stairs; i++) {
      dp[i] = Math.max(dp[i - 1] + stairVal[i], dp[i - 2] + stairVal[i]);
    }

    return dp[stairs - 1];
  }
  let result = countStairs(chunks.join(" "));
  console.log(result);
});

// Sample Input 1:
// 2
// 1 2
// Sample Output 1:
// 3
// Sample Input 2:
// 2
// 2 -1
// Sample Output 2:
// 1
// Sample Input 3:
// 3
// -1 2 1
// Sample Output 3:
// 3
