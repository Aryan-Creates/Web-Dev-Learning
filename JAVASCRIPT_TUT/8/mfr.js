let arr = [3, 4, 1, 6, 9];
// let newArr = []
// for(let index = 0; index < arr.length; index++){
//     const element = arr[index];
//     newArr.push(element**2);
// }

let newArr = arr.map((e, index, array) =>{
    return e**2;
})

console.log(newArr)
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(newArr.filter(greaterThanSeven))

let arr2 = [21, 34, 65, 67, 78, 1]

const red = (a, b)=>{
    return a+b
}

console.log(arr2.reduce(red))

console.log(Array.from("Aryannnn"))