// Get input from the stream
let chunks = [];
process.stdin.on("readable", function () {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    chunks.push(chunk);
  }
});
process.stdin.on("end", function () {
  function knapsackBU(data) {
    // parse input
    let input = data.toString().split("\n");
    let sackLen = parseInt(input[0].split(" ")[0]);
    let barCount = parseInt(input[0].split(" ")[1]);
    let barWgArr = input[1].split(" ").map((e) => parseInt(e));

    let array = new Array(barCount + 1);
    for (let i = 0; i <= barCount; i++) {
      array[i] = Array(sackLen + 1);
      for (let w = 0; w <= sackLen; w++) {
        if (w == 0 || i == 0) {
          array[i][w] = 0;
        } else if (barWgArr[i - 1] <= w) {
          array[i][w] = Math.max(
            barWgArr[i - 1] + array[i - 1][w - barWgArr[i - 1]],
            array[i - 1][w]
          );
        } else {
          array[i][w] = array[i - 1][w];
        }
      }
    }
    console.log(array[barCount][sackLen]);
  }

  knapsackBU(chunks.join(""));
});

// Sample Input:
// 10 3
// 1 4 8
// Sample Output:
// 9
