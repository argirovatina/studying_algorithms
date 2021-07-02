// Get input from the stream
let stdin = process.openStdin();
stdin.on("data", function (data) {
  // parse input
  let input = data.toString().split("\n");
  let linesInt = parseInt(input.shift());
  let pointsArr = input.reduce(
    (acc, v) =>
      v !== "" ? [...acc, v.split(" ").map((w) => parseInt(w))] : acc,
    []
  );
  pointsArr.sort((a, b) => a[1] - b[1]);
  let aimArray = new Set();
  let rightPoint = pointsArr[0][1];
  aimArray.add(rightPoint);
  if (linesInt >= 1 && linesInt <= 100) {
    for (let i = 1; i < linesInt; i++) {
      if (0 <= pointsArr[i][0] && pointsArr[i][1] <= 10 ** 9) {
        if (rightPoint >= pointsArr[i][0] && rightPoint <= pointsArr[i][1]) {
          aimArray;
        } else {
          aimArray.add(pointsArr[i][1]);
          rightPoint = pointsArr[i][1];
        }
      }
    }
  }
  console.log(aimArray.size + "\n" + [...aimArray].join(" "));
});

// Sample Input 1:
// 3
// 1 3
// 2 5
// 3 6
// Sample Output 1:
// 1
// 3
// Sample Input 2:
// 4
// 4 7
// 1 3
// 2 5
// 5 6
// Sample Output 2:
// 2
// 3 6
