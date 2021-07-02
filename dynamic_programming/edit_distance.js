// Get input from the stream
let chunks = [];
process.stdin.on("readable", function () {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    chunks.push(chunk);
  }
});
process.stdin.on("end", function () {
  function editDist(data) {
    // parse inputÏ
    let input = data.toString().split("\n");
    let string1 = input[0].split("");
    let string2 = input[1].split("");

    let len1 = string1.length;
    let len2 = string2.length;
    let array = new Array(len1);

    for (let i = 0; i < len1; i++) {
      array[i] = new Array(len2);
      for (let j = 0; j < len2; j++) {
        array[i][j] = Math.min(
          getPrice(i - 1, j, array) + 1,
          getPrice(i, j - 1, array) + 1,
          getPrice(i - 1, j - 1, array) + getDiff(string1[i], string2[j])
        );
      }
    }
    console.log(getPrice(len1 - 1, len2 - 1, array));
  }

  function getPrice(i, j, arr) {
    if (i < 0 && j < 0) return 0;
    if (i < 0) return j + 1;
    if (j < 0) return i + 1;
    return arr[i][j];
  }
  function getDiff(a, b) {
    return a == b ? 0 : 1;
  }

  editDist(chunks.join(""));
});

// Sample Input 1:
// ab
// ab
// Sample Output 1:
// 0
// Sample Input 2:
// short
// ports
// Sample Output 2:
// 3
