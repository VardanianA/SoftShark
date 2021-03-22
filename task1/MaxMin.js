function maxMin(array) {

    let max = array[0];
    let min = array[0];

    for (let i = 0; i <= array.length; i++) {
        if (array[i] > max) max = array[i];
        if (array[i] < min) min = array[i];
    }

    return [ min, max ];
}


function sumary(result){
    return result[0] + result[1];
}


input_array = [1, 2, 10];
result = maxMin(input_array);

console.log(sumary(result));
