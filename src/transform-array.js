module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw Error;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {

        if ((arr[i] === '--discard-next') && (arr[i + 2] === '--double-prev')) {
            i = i + 2;
            continue;
        };

        if ((arr[i] === '--discard-next') && (arr[i + 2] === '--discard-prev')) {
            i = i + 2;
            continue;
        };

        if (arr[i] === '--discard-next') {
            if (arr.length - 1 > i) {
                i++;
            };

            continue;
        };
        if (arr[i] === '--discard-prev') {
            if (i > 0) {
                newArr.pop();
            };
            continue;
        };
        if (arr[i] === '--double-next') {
            if (arr.length - 1 > i) {
                newArr.push(arr[i + 1]);
            };
            continue;
        };

        if (arr[i] === '--double-prev') {
            if (i > 1) {
                newArr.push(arr[i - 1]);
            };
            continue;
        };
        newArr.push(arr[i]);
    }
    return newArr;
};