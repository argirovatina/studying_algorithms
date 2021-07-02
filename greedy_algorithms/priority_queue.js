// Get input from the stream
let data = '';
process.stdin.on('readable', function () {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
        data += chunk;
    }
});
process.stdin.on('end', function () {

function getMaximum(data) {
    // parse input
    let input = data.toString().trim().split('\n');
    input.shift();
    let priorityArr = [];
    input.forEach(operation => {
        if (operation.includes('Insert')) {
            let value = operation.split(' ').pop();
            insertPriority(priorityArr, parseInt(value));
        } else if (operation.includes('ExtractMax')) {
            extractMax(priorityArr);
        }
    });
}

function extractMax(priorityArr) {
    let maxValue = priorityArr[0];
    console.log(maxValue);
    priorityArr[0] = priorityArr[priorityArr.length - 1]
    priorityArr.length = priorityArr.length - 1;
    let i = 0;
    while (2 * i + 1 < priorityArr.length) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let childIndex = left;
        if (priorityArr[left] < priorityArr[right] && right < priorityArr.length) {
            childIndex = right;
        }
        if (priorityArr[i] >= priorityArr[childIndex]) {
            break;
        }
        let temp = priorityArr[i];
        priorityArr[i] = priorityArr[childIndex];
        priorityArr[childIndex] = temp;
        i = childIndex;
    }
}

function insertPriority(priorityArr, priorityVal) {
    priorityArr.push(priorityVal);
    let i = priorityArr.length - 1;
    while (i > 0 && priorityArr[Math.floor((i - 1) / 2)] < priorityArr[i]) {
        let temp = priorityArr[i];
        priorityArr[i] = priorityArr[Math.floor((i - 1) / 2)];
        priorityArr[Math.floor((i - 1) / 2)] = temp;
        i = Math.floor((i - 1) / 2);
    }
}
    getMaximum(data);
});

// Sample Input:
// 6
// Insert 200
// Insert 10
// ExtractMax
// Insert 5
// Insert 500
// ExtractMax
// Sample Output:
// 200
// 500