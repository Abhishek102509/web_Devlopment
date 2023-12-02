let arr =[1,2,3,4,5,6,2,3];
let num=2;
for(i=0; i<arr.length; i++){
    if(arr[i] == num){
    arr.splice(i,1);
}
}
console.log(arr)


// //1

let Number =287152;
let count = 0;
let copy = Number;

while(copy>0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count)

//2
let number1 =287152;
let sum = 0;
let copy1 = number1; 
while(copy1>0){
    digit =copy1 % 10;  //first time 2,5,1,......
    sum+= digit;  // sum= 0+2=2,2+5=7,.....
    copy1 = Math.floor(copy1/10);    //287152/10=28715,....... and again while loop
}
console.log(sum);





//3
let n = 5;
let factorial = 1;
 for(let i=1; i<=n; i++){
    factorial *= i;

 }
 console.log(`factorial of ${n} is ${factorial}`)


 //4

 let arr1 = [2,5,10,4,2,7,1,9];
 let largest = 0;
 for(let i=0; i<=arr.length; i++){
    if(largest<arr1[i]){
        largest = arr1[i];
    }
 }
console.log(`Largest Number is ${largest}`)