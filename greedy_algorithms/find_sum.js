// Get input from the stream
let stdin = process.openStdin();
stdin.on("data", function (data) {
  let number = parseInt(data);
  let aimArray = [];
  let i = 1;
  if (number >= 1 && number <= 10 ** 9) {
    while (number > 0) {
      if (number - i > i) {
        aimArray.push(i);
        number -= i;
        i++;
      } else {
        aimArray.push(number);
        number -= number;
      }
    }
  }
  console.log(`${aimArray.length}\n${aimArray.join(" ")}`);
});

// Sample Input 1:
// 4
// Sample Output 1:
// 2
// 1 3
// Sample Input 2:
// 6
// Sample Output 2:
// 3
// 1 2 3
