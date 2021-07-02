function stringCoder(data) {
  let inputString = data.trim().split("");
  let unprioritisedHash = inputString.reduce((accumulator, currentValue) => {
    if (Object.keys(accumulator).includes(currentValue)) {
      accumulator[currentValue] += 1;
    } else {
      accumulator[currentValue] = 1;
    }
    return accumulator;
  }, {});
  let initialHash = sortHash(unprioritisedHash);

  let priorityHash = {};
  while (Object.keys(initialHash).length > 1) {
    assignPriorityAndUpdate(initialHash, priorityHash);
    initialHash = sortHash(initialHash);
  }

  let resultHash = {};
  let uniqLetters = Object.keys(initialHash)[0].split("");
  uniqLetters.forEach((key) => {
    for (let i = Object.keys(priorityHash).length; i >= 0; i--) {
      if (uniqLetters.length === 1) {
        resultHash[key] = "0";
      } else if (resultHash[key] === undefined) {
        resultHash[key] = "";
      } else if (Object.keys(priorityHash)[i].includes(key)) {
        resultHash[key] += priorityHash[Object.keys(priorityHash)[i]];
      }
    }
  });
  let codedString = inputString.reduce(
    (acc, letter) => (acc += resultHash[letter]),
    ""
  );
  console.log(`${uniqLetters.length} ${codedString.split("").length}\n`);
  Object.keys(resultHash)
    .sort()
    .forEach((key) => console.log(`${key}: ${resultHash[key]}\n`));
  console.log(codedString);
}

function sortHash(hash) {
  let sortedHash = {};
  Object.keys(hash)
    .sort((a, b) => hash[a] - hash[b])
    .forEach((el) => (sortedHash[el] = hash[el]));
  return sortedHash;
}

function assignPriorityAndUpdate(initialHash, resultHash) {
  let keys = Object.keys(initialHash);
  let currentV = initialHash[keys[0]];
  let nextV = initialHash[keys[1]];
  resultHash[keys[0]] = "0";
  resultHash[keys[1]] = "1";
  delete initialHash[keys[0]];
  delete initialHash[keys[1]];
  initialHash[keys[0] + keys[1]] = currentV + nextV;
  return initialHash;
}

// Example:
stringCoder("*f*fgg*f*fefabaggb*acga*d");
