function divideParts(array, size){
    var result = [];

    for (let i = 0; i < array.length; i += size) {
        divide = array.slice(i, i + size);
        result.push(divide);
    }

    return result;
}

let output1 = divideParts([1, 2, 3, 4, 5, 6], 2);
console.log("output1:", output1);

let output2 = divideParts([1, 2, 3, 4, 5], 3);
console.log("output2:", output2);

let output3 = divideParts([1, 2, 3, 4, 5], 2);
console.log("output3:", output3);