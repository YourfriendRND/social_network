const getRandomArray = function (array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tempValue = array[j];
        array[j] = array[i];
        array[i] = tempValue;
    }
    return array;
}

export {
    getRandomArray,
}