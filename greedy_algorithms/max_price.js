// Get input from the stream
let stdin = process.openStdin();
stdin.on('data', function (data) {
	// parse input
    let input = data.toString().split("\n").reduce((acc, v) =>
            v !== '' ? [...acc, v.split(' ').map(w => parseFloat(w))] : acc,
        []);
    let maxVolume = input[0][1];
    input.shift();
    let pricesArray = input.filter((a) => !a.includes(NaN)).sort((a, b) => (b[0] / b[1] - a[0] / a[1]));;
    let totalPrice = 0;
    let i = 0;
    while (maxVolume > 0 && i !== pricesArray.length) {
        if (maxVolume >= pricesArray[i][1]) {
            maxVolume -= pricesArray[i][1];
            totalPrice += pricesArray[i][0];Ï
            i ++;
        } else {
            totalPrice += pricesArray[i][0] / pricesArray[i][1] * maxVolume;
            break;
        }
    }
    console.log(parseFloat(totalPrice).toFixed(3));
});

// Sample Input:
// 3 50
// 60 20
// 100 50
// 120 30
// Sample Output:
// 180.000