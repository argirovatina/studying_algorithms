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
    let linesCount = parseInt(input[0].split(" ")[0]);
    let pointsCount = parseInt(input[0].split(" ")[1]);
    let leftPoints = [];
    let rigthPoints = [];
    for (let i = 1; i <= linesCount; i++) {
      leftPoints.push(parseInt(input[i].split(" ")[0]));
      rigthPoints.push(parseInt(input[i].split(" ")[1]));
    }
    let resultArr = [];
    quickSort(leftPoints, 0, leftPoints.length - 1);
    quickSort(rigthPoints, 0, rigthPoints.length - 1);
    points.forEach((point) => {
      let leftPointCounter = 0;
      let rightPointCounter = 0;
      let i = 0;
      let j = 0;
      while (leftPoints[i] <= point) {
        leftPointCounter += 1;
        i++;
      }
      while (rigthPoints[j] < point) {
        rightPointCounter += 1;
        j++;
      }
      resultArr.push(leftPointCounter - rightPointCounter);
    });
    console.log(resultArr.join(" "));
  }

  function quickSort(array, l, r) {
    while (l < r) {
      let [divideIndex, medianaIndex] = partition(array, l, r);
      quickSort(array, l, divideIndex - 1);
      l = divideIndex + 1;
    }
  }

  function partition(array, l, r) {
    let baseValue = array[l];
    let j = l;
    let m = Math.floor(r / 2);
    for (let i = l + 1; i <= r; i++) {
      if (array[i] < baseValue) {
        j += 1;
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
    for (let i = l + 1; i <= r - 1; i++) {
      if (array[i] == baseValue) {
        m += 1;
        let temp = array[m];
        array[m] = array[i];
        array[i] = temp;
      }
    }
    let temp = array[l];
    array[l] = array[j];
    array[j] = temp;
    return [j, m];
  }
  pointLine(chunks.join(" "));
});
// Sample Input:
// 2 3
// 0 5
// 7 10
// 1 6 11
// Sample Output:
// 1 0 0
