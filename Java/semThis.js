function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2
    });
}

const nums = [2, 4, 5, 7, 8];

console.log(mapSemThis(nums));

console.log(nums);