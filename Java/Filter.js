function filtrapares(arr) {
    return arr.filter(callback)
}

function callback (item){
    return item % 2 !== 0;
}

const meuArray = [1, 3, 45, 67, 8, 2, 6, 4, 10];

console.log (filtrapares(meuArray));