const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) {
    if (arr.length){
        let hasil = 0;
        for(let i=0; i < arr.length; i++){
            hasil += arr[i];
        }
        return hasil
    }
}
console.log("nomor 1")
console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

//no.2
const avg1 = [...arr1]
const avg2 = [...arr2]
function countAboveAvg(arr, avg) {
    arr = sumOfArray(arr)/avg.length;
    for(let i = 0; i < avg.length; i++) {
        if(avg[i] > arr){
            console.log("rata2 :",arr, "angka di atas Rata2 :", avg[i])
        }
    }
}
console.log("nomor 2")
const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);