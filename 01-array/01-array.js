
// No. 1
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

const cloneArray = [...arr]
const cloneArray2 = [...arr2]

function reverse(array) {
    if(array.length >= 1){
        return array.reverse();
    }
}
const newArr = reverse(cloneArray);
const newArr2 = reverse(cloneArray2);

console.log(arr, newArr);
console.log(arr2, newArr2);

//No 2
// const arr1 = [1, 3, 4, 1, 2, 8];
// const arr2 = [5, 6, 7, 8, 1, 3];

// function getAverage(array) {
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         sum += array[i]; 
//     }
//     console.log("sum", sum)
//     let rata2 = sum/array.length;
//     console.log("rata", rata2)

//     let hasil = [];
//     for(j = 0; j < array.length; j++){
//         if(array[j] > rata2){
//             hasil = array[j]
//             console.log(hasil)
//         }
//     }
//     return hasil.length;
// }

// console.log(getAverage(arr1))
// console.log(getAverage(arr2))

//No 3

  
//   console.log(searchInArray(arr, 3));
//   console.log(searchInArray(arr, 2));
//   console.log(searchInArray(arr, 4));
//   console.log(searchInArray(arr, 8));
