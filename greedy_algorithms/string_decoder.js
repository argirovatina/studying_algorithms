function stringDecoder(data) {
  let input = data.toString().trim().split("\n");
  input.shift();
  let inputStr = input.pop();
  let decodedStr = "";
  let vocabularyArr = input
    .map((key) => key.split(": "))
    .reduce((acc, v) => {
      acc[v[0]] = v[1];
      return acc;
    }, {});

  let filter = [];
  let inputStrArr = inputStr.toString().split("");
  let letter = "";
  let i = 0;
  inputStrArr.forEach((s) => {
    while (i <= inputStrArr.length) {
      filter = Object.values(vocabularyArr).filter((v) => v === letter);
      if (filter.length === 0) {
        letter += inputStrArr[i];
        i++;
      } else {
        decodedStr += getKeyByValue(vocabularyArr, letter);
        letter = "";
        for (let i = 0; i < letter.length; i++) {
          delete inputStrArr[i];
        }
        break;
      }
    }
  });
  console.log(decodedStr);
}
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

// Example:
stringDecoder(
  "3 17\n" + "y: 0\n" + "z: 10\n" + "t: 11\n" + "10101010101100000"
);
